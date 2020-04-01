import { Component, ViewChild } from "@angular/core";
import { AppVersion } from "@ionic-native/app-version";
import { Clipboard } from '@ionic-native/clipboard';
import { Network } from "@ionic-native/network";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import CryptoJS from "crypto-js";
import { AlertController, App, Events, LoadingController, Nav, Platform, PopoverController, ToastController } from "ionic-angular";
import * as moment from "moment";
import { NgProgressService } from 'ng2-progressbar';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { WelcomeComponent } from "../pages/welcome/welcome.component";
import { isProduction } from "../util/util";
import { CleverTap } from "@ionic-native/clevertap";

declare var UserExperior: any;

// declare var KochavaTracker: any;
@Component({
    selector: "app-component",
    templateUrl: "app.html"
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = WelcomeComponent;
    // pages: Array<{
    //   icon: string;
    //   title: string;
    //   component?: any;
    //   nav: boolean;
    //   childs?: any[];
    //   toggle?: boolean;
    // }>;

    isFourground: boolean = true;
    production = isProduction;
    isLoading: boolean = true;
    socket_get_status$: any;
    loader: any;
    connectionError: any = {
        title: "Koneksi Gagal",
        subTitle: "Tolong Periksa Koneksi Internet Anda..",
        buttons: [{
            text: "Coba Lagi",
            handler: () => {
                this.cekNetwork();
                let ceknet = localStorage.getItem("connection-error");
                if (ceknet == '0') this.pService.start();
                console.log("Try Again", ceknet);
            }
        }],
        cssClass: "dangerAlert"
    };
    failedReLogin: any = {
        title: "Perpanjang Token Gagal",
        subTitle: "Silahkan login kembali..",
        buttons: [
            {
                text: "Tutup",
                handler: () => {
                    this.doLogout();
                }
            }
        ],
        cssClass: "dangerAlert"
    };
    error404: any = {
        title: "Unauthorize",
        subTitle: "Silahkan login kembali..",
        buttons: [
            {
                text: "Tutup",
                handler: () => {
                    this.doLogout();
                }
            }
        ],
        cssClass: "dangerAlert"
    };
    isMarketing: boolean;
    isAdmin: boolean;
    isOwner: boolean;
    showToast;

    toastConnection;
    users;
    profile: any = [{
        name: '',
        email: '',
        phone: '',
        package: '',
        role: ''
    }];
    referral_code = '';

    private ngUnsubscribe = new Subject();


    onConnectSub: any;
    onDisconnectSub: any;
    
    registerBackButton: Function;
    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public network: Network,
        public events: Events,
        public alertCtrl: AlertController,
        public appVersion: AppVersion,
        public loadingController: LoadingController,
        private pService: NgProgressService,
        private toastCtrl: ToastController,
        public app: App,
        private clipboard: Clipboard,
        public popoverCtrl: PopoverController,
        private clevertap: CleverTap,
    ) {
        console.log("iniii")
        events.subscribe('login', () => {
            this.cekProfile();
        });

        let package_start = new Date(localStorage.getItem("package_start"));
        let package_end = new Date(localStorage.getItem("package_end"));

        console.log("package", package_start, package_end)

        // var myEpochStart = package_start.getTime()/1000.0;
        // var myEpochEnd = package_end.getTime()/1000.0;

        // localStorage.setItem("myEpochStart", myEpochStart.toString());
        // localStorage.setItem("myEpochEnd", myEpochEnd.toString());

        this.cekProfile();

        localStorage.setItem("campaign", "referrer=");
        console.log("this.version", localStorage.getItem("version"));


        console.log("this.socket_get_status", this.socket_get_status$);
        // this.splashScreen.show();
        this.initializeApp();
    }

    clearToggle(item: any) {
        
    }
    setActive(item: any) {
        
    }

    cekProfile() {
        
    }
    copy() {
        console.log("referral_code", this.referral_code);
        let copy = this.clipboard.copy(this.referral_code);
        console.log(copy);
        if (copy) {
            let toast = this.toastCtrl.create({
                message: this.referral_code + ' Copy to Clipboard',
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        }
    }
    ionViewDidEnter() {
        this.platform.registerBackButtonAction(() => {
            const overlayView = this.app._appRoot._overlayPortal._views[0];
            let updated = localStorage.getItem("updated");
            if (overlayView && overlayView.dismiss && updated != '1') {
                overlayView.dismiss();
            }
        }, 1);

    }

    ionViewDidLoad() {
        // this.fcm.getToken();
        // this.fcm.listenNotification().pipe(
        //     tap(
        //         msg=>{

        //         }
        //     )
        // )

        // this.fcm.init();
    }

    pushUpdate() {

    }

    applicationStatus() {
       
    }

    initializeApp() {
        console.log("InitailizeApp");
        this.cekNetwork();
        this.cekProfile();
        this.platform.resume.subscribe((res: any) => {
            this.isFourground = true;
            this.applicationStatus();
            if (isProduction) {
            }
            if (this.onConnectSub) {
                this.onConnectSub.unsubscribe();
                this.onConnectSub = undefined;
            }
            if (this.onDisconnectSub) {
                this.onDisconnectSub.unsubscribe();
                this.onDisconnectSub = undefined;
            }
            this.onDisconnectSub = this.network.onDisconnect().subscribe(() => {
                setTimeout(() => {
                    console.log("Disconnected");
                    let notConnect = true;
                    this.network.type === "none";
                    let connectionErrorLocal = localStorage.getItem("connection-error");
                    let connectionError = parseInt(connectionErrorLocal);
                    if (this.isFourground && notConnect && connectionError) {
                        // const alert = this.alertCtrl.create(this.connectionError);
                        // alert.present();
                        // this.presentToast();
                    }
                    localStorage.setItem("connection-error", "0");
                }, 1000);
            });
            this.onConnectSub = this.network.onConnect().subscribe(() => {
                console.log("Connected");
                localStorage.setItem("connection-error", "1");
            });
            
        }, (err: any) => {
            console.log("error 2", err);
        });
        window.addEventListener('beforeunload', () => {
        });
        this.platform.pause.subscribe((res: any) => {
            if (isProduction) {
            }
            this.isFourground = false;
        });
        this.platform.ready().then(() => {
            document.addEventListener('onCleverTapProfileDidInitialize', (e: any) => {
                console.log("onCleverTapProfileDidInitialize");
                console.log(e.CleverTapID);
            });
            this.splashScreen.hide();
            this.statusBar.overlaysWebView(false);
            this.applicationStatus();
            this.statusBar.backgroundColorByHexString('#3D99D4');//styleBlackOpaque();
            


            if (this.platform.is('cordova')) {
                console.log("this platform", this.platform);
                document.addEventListener('onCleverTapProfileDidInitialize', (e: any) => {
                    console.log("onCleverTapProfileDidInitialize");
                    console.log(e.CleverTapID);
                });
                this.clevertap.setDebugLevel(2);
                this.clevertap.recordEventWithName("paper ionic initialize");

                if (isProduction) {
                    UserExperior.startRecording("baafd108-9661-4768-bdbc-42b8deb47645");
                } else {
                    UserExperior.startRecording("5d8315ca-748b-4896-840b-5ebf1b5a6969");
                }
            }

        }).catch((err) => {

            console.log('ERROR: ', err);
            this.error404.title = "Something wrong";
            this.error404.subTitle = err;

            const alert = this.alertCtrl.create(this.error404);
            alert.present();
            this.splashScreen.hide();
            this.statusBar.overlaysWebView(false);
            this.applicationStatus();
            this.statusBar.backgroundColorByHexString('#3D99D4');//styleBlackOpaque();
            this.doOnReady();
            this.doLogout()

        });
    }

    ngOnInit() {

    }

    cekNetwork() {


        // Offline event
        this.events.subscribe('network:offline', () => {

            let notConnect = true;
            this.network.type === "none";
            console.log('network:offline ==> ' + this.network.type);
            // let connectionErrorLocal = localStorage.getItem("connection-error");
            // let connectionError = parseInt(connectionErrorLocal);

            if (this.isFourground && notConnect) {
                // const alert = this.alertCtrl.create(this.connectionError);
                // alert.present();
                // this.pService.start();

                this.showToast = Observable.interval(5000).subscribe(x => {
                    // this.presentToast();
                    this.presentToast();
                    this.showToast.unsubscribe();
                });

                console.log("this toas show Disconnect", this.showToast);


            }
            localStorage.setItem("connection-error", "0");
        });

        // Online event
        this.events.subscribe('network:online', () => {
            console.log('network:online ==> ' + this.network.type);
            localStorage.setItem("connection-error", "1");
            // this.loader.dismiss();
            this.pService.done();
            console.log("this toas show Conenct", this.showToast);
            if (this.showToast.closed == false) {
                this.showToast.unsubscribe();
            }
            // this.presentToast();

        });
    }

    presentToast() {

        let toast = this.toastCtrl.create({
            message: 'Koneksi gagal. Harap periksa koneksi internet anda',
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Coba Lagi",
            cssClass: 'toast-network'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
            let ceknet = localStorage.getItem("connection-error");
            console.log("cek network", ceknet);
            if (ceknet == '0') this.pService.start();
        });

        toast.present();
        // return toast;
    }

    // isLatesVersion() {

    // 	return new Observable((observer: any) => {
    // 		console.log("isLatesnya");
    // 		this.authService.getLatestVersion().subscribe(
    // 			(res: any) => {
    // 				console.log("this.res lates", res);
    // 				console.log(res.text());
    // 				let regex =
    // 					res
    // 						.text()
    // 						.match(
    // 							'Current Version</div><span class="htlgb"><div><span class="htlgb">[0-9].[0-9].[0-9][0-9][0-9]'
    // 						) + "";
    // 				let latestVersion = regex.substring(66);
    // 				regex = undefined;
    // 				this.appVersion.getVersionNumber().then(version => {
    // 					let latestVersionNumber = Number(latestVersion.split(".").join(""));
    // 					let versionNumber = Number(version.split(".").join(""));
    // 					console.log("version getversion", version);
    // 					console.log("latestVersion", latestVersion);
    // 					console.log("latestVersionNumber", latestVersionNumber);
    // 					console.log("versionNumber", versionNumber);
    // 					if (latestVersionNumber <= versionNumber) {
    // 						observer.next(true);
    // 					} else {
    // 						observer.next(false);
    // 					}
    // 					observer.complete();
    // 				});
    // 			},
    // 			() => {
    // 				observer.next(true);
    // 			}
    // 		);
    // 	});
    // }

    doOnReady() {
        let user_name = localStorage.getItem("user_name");
        let token_expire = localStorage.getItem("token_expire");
        this.checkModuleRole();
        if (user_name && token_expire) {
            console.log("user and token", user_name, token_expire)
            this.checkLogged(user_name, token_expire);
        }
        if (this.onConnectSub) {
            this.onConnectSub.unsubscribe();
            this.onConnectSub = undefined;
        }
        if (this.onDisconnectSub) {
            this.onDisconnectSub.unsubscribe();
            this.onDisconnectSub = undefined;
        }
        this.onConnectSub = this.network.onDisconnect().subscribe(() => {
            setTimeout(() => {
                let notConnect = this.network.type === "none";
                let connectionErrorLocal = localStorage.getItem("connection-error");
                let connectionError = parseInt(connectionErrorLocal);
                if (this.isFourground && notConnect && connectionError) {
                    // const alert = this.alertCtrl.create(this.connectionError);
                    // alert.present();
                }
                localStorage.setItem("connection-error", "0");
            }, 1000);
        });
        this.onDisconnectSub = this.network.onConnect().subscribe(() => {
            localStorage.setItem("connection-error", "1");
        });
    }
    checkModuleRole() {
        let moduleRole: any = localStorage.getItem("user_module_role");
        if (moduleRole) {
            moduleRole = JSON.parse(moduleRole);
            console.log('moduleRole', moduleRole);
            if (moduleRole && moduleRole.length) {
                this.isAdmin = moduleRole[0].module_role.name == "Admin";
                this.isMarketing = moduleRole[0].module_role.name == "Marketing";
                this.isOwner = moduleRole[0].module_role.name == "Owner";
            }
        }
    }
    menuOpened() {
        // setScreenAnalytics("menu_open", this.firebase);
    }
    menuClosed() {
        // setScreenAnalytics("menu_close", this.firebase);
    }

    checkLogged(user_name, token_expire) {
        console.log("user nya", user_name, token_expire);
        let token_expire_date = moment(token_expire, "YYYY-MM-DD");
        let now = moment();
        let diff = token_expire_date.diff(now) < 86400 * 14; //14 hari
        let expire = token_expire_date.diff(now) < 0;
        if (expire) {
            return this.doLogout();
        }

        this.error404.subTitle = diff;

        const alert = this.alertCtrl.create(this.error404);
        alert.present();

        console.log("diff", diff);
        if (diff) {
            let userData = localStorage.getItem(user_name);
            if (userData) {
                let userDecrypt = CryptoJS.AES.decrypt(userData, user_name).toString(
                    CryptoJS.enc.Utf8
                );
                let user = JSON.parse(userDecrypt);
                console.log("user nya", user);
                

            }

        } else {
        }
    }

    logout() {
        let confirm = this.alertCtrl.create({
            title: "Logout Aplikasi",
            message: "Apakah Anda Yakin?",
            buttons: [
                {
                    text: "Batal",
                    handler: () => { }
                },
                {
                    text: "Logout",
                    handler: () => {
                        this.doLogout();
                    }
                }
            ]
        });
        confirm.present();
    }

    forceLogout() {
        let confirm = this.alertCtrl.create({
            title: "Selamat Email Anda Berhasil Di Ganti",
            message: "Silahkan melakukan Login ulang",
            buttons: [
                {
                    text: "Login",
                    handler: () => {
                        this.doLogout();
                    }
                }
            ]
        });
        confirm.present();
    }

    doLogout() {
        let user_name = localStorage.getItem("user_name") || "";
        localStorage.removeItem(user_name);
        localStorage.removeItem("user_name");
        localStorage.removeItem("token_expire");
        localStorage.removeItem("user_id");
        localStorage.removeItem("referral_code");
        
    }

    openPage(page) {
        console.log("page component", page, page.component.name);
        // if (page.url) {
        // 	this.rootPage = page.url;
        // }
        // else {
        this.nav.setRoot(page.component);
        // }
        if (this.platform.is('cordova')) {
            UserExperior.startScreen(`${page.title}`);
        }
    }

    openChild(page) {
        page.toggle = !page.toggle;
    }

    saveOAuthToken(oauth_token, userData) {
        return new Observable((observer: any) => {
            if (oauth_token) {
                localStorage.setItem("bearer_token", oauth_token);
            }
            let next5Day = moment()
                .add(5, "days")
                .format("YYYY-MM-DD");
            
        });
    }

    feedBackOpen() {

    }


    ionViewWillLeave() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
