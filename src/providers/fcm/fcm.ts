import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { FCM } from '@ionic-native/fcm';
import { CleverTap } from '@ionic-native/clevertap';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging';
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  	constructor(
		// public http: HttpClient,
		private platfofrm: Platform,
		public fcm: FCM,
		private clevertap: CleverTap,
		private firebaseMessaging: FirebaseMessaging
    ) {
    	console.log('Hello FcmProvider Provider');
  	}

	initFireMessaging(){
		console.log("init firemessage")
		this.firebaseMessaging.requestPermission();
		this.firebaseMessaging.onMessage().subscribe(
			data=>{
				console.log("message", data);
			}
		);
	}
  	async getToken(){
		let token;
		
		if (this.platfofrm.is('android')){
			token = await this.fcm.getToken();
		}

		if(!this.platfofrm.is('cordova')){
			// 
		}
		console.log("fcm token", token);
		this.clevertap.setDebugLevel(2);
		this.clevertap.enablePersonalization();
        this.clevertap.recordEventWithName("DARI FCM");
		this.clevertap.registerPush();
		this.clevertap.createNotificationChannel("TEST_CHANNEL", "Test Channel", "A TEST channel", 0, true);
		try {
			
			this.clevertap.profileGetCleverTapID().then((id) => {console.log("CleverTapID: " + id)});
		}catch(err) {
			console.log("error clevertap", err);
		}
		this.clevertap.setPushToken(token);
		console.log("clevertap init token");
		return token;
	}
	  
	//   private saveToken(token) {
	// 	  if(!token) return;

	// 	  const devicesRef = this.afs.collection('devices');

	// 	  const doc_data = {
	// 		  token,
	// 		  userId: 'testUser'
	// 	  }

	// 	  return devicesRef.doc(token).set(doc_data);
	//   }

	listenNotification(){
		console.log("fcm notif")
		// try{
			this.fcm.onNotification().subscribe(
				(data)=>{
					console.log("fcm", data);
					if(data.wasTapped){
						console.log("fcm Received in background");
					} else {
						console.log("fcm Received in foreground");
					};
				},
				(err)=>{
					console.error("fcm err", err);
				}
			)
		// } catch(e) {
		// 	console.error("fcm err", e);

		// }
	  }

	pushSetup() {
		// const options: PushOptions = {
		// 	android: {
		// 		senderID:'543801968470'
		// 	},
		// 	ios: {
		// 		alert: 'true',
		// 		badge: true,
		// 		sound: 'false'
		// 	}
		//  };

		// const pushObject: PushObject = this.push.init(options);


		// pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

		// pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

		// pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
	}

	init() {
		// this.push.hasPermission()
		// .then((res: any) => {
	  
		// 	if (res.isEnabled) {
		// 		console.log('We have permission to send push notifications');
		// 	} else {
		// 		console.log('We do not have permission to send push notifications');
		// 	}
	  
		// });
		// this.pushSetup();
		this.fcm.subscribeToTopic('marketing');
		//push notification payload handling
		document.addEventListener('onCleverTapInAppNotificationDismissed', (e: any) => {
			console.log("onCleverTapInAppNotificationDismissed");
			console.log(JSON.stringify(e.extras));
			console.log(JSON.stringify(e.actionExtras));
		});
		document.addEventListener('onPushNotification', (e: any) => {
			console.log("onPushNotification");
			console.log(JSON.stringify(e.notification));
		  });
		this.getToken();
		this.initFireMessaging();
		this.listenNotification();
		// .subscribe(
		// 	data=>{
		// 		console.log("fcm data", data);
		// 		if(data.wasTapped){
		// 			console.log("fcm Received in background");
		// 		} else {
		// 			console.log("fcm Received in foreground");
		// 		};
		// 	}
		// )

		

            // this.fcm.getToken().then(token => {
            // // backend.registerToken(token);
            //     console.log("fcm token", token)
            // });

            // this.fcm.onNotification().subscribe(data => {
            //     console.log('notif data', data);
            //     if(data.wasTapped){
            //         console.log("Received in background");
            //     } else {
            //         console.log("Received in foreground");
            //     };
            // });

            this.fcm.onTokenRefresh().subscribe(token => {
            // backend.registerToken(token);
            });

            this.fcm.unsubscribeFromTopic('marketing');
	}

}
