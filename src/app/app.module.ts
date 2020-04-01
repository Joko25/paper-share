import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import {
    NgModule,
} from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { SocialSharing } from "@ionic-native/social-sharing";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { Contacts } from "@ionic-native/contacts";
import { FileOpener } from "@ionic-native/file-opener";
import { Network } from "@ionic-native/network";
import { EmailComposer } from "@ionic-native/email-composer";
import { ImagePicker } from "@ionic-native/image-picker";
import { FeedbackComponent } from "./feedback.component";
//other
import { MyApp } from "./app.component";
import { WelcomeComponent } from "../pages/welcome/welcome.component";
import { Login } from "../pages/login/login.component";
import { ForgotPasswordComponent } from "../pages/login/forgot.component";




import { ChartsModule } from "ng2-charts";
import { zendeskService } from "../services/zendesk.service";


import { AppVersion } from "@ionic-native/app-version";

import { Numbers } from "../components/number-only-formatter.directive";


import { NgProgressModule } from "ng2-progressbar"

import { PopOverComponent } from './../components/pop-over.component';

import { CoreModule } from './../pages/core.module';

import { GetApiValidatorService } from "../services/get-api-validator.service";
// import { Deeplinks } from '@ionic-native/deeplinks';

import { GoogleAnalytics } from '@ionic-native/google-analytics';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Clipboard } from '@ionic-native/clipboard';
import { Device } from '@ionic-native/device';
// import { RichTextComponent } from '../components/rich-text/rich-text';


import { CleverTap } from '@ionic-native/clevertap';
import { FcmProvider } from '../providers/fcm/fcm';

// const firebase = {
//     apiKey:"AIzaSyCqTTHS9v49X7MFmCskXpU7egKpRxNRn4M",
//     authDomain:"543801968470-haopimct7hch9fj595p0r0hgs9ms54ra.apps.googleusercontent.com",
//     databaseUrl:"https://paper-invoicing-android-ionic.firebaseio.com",
//     projectId:"paper-invoicing-android-ionic",
//     storageBucket:"paper-invoicing-android-ionic.appspot.com",
//     messagingSenderId:"543801968470"
// }
import { EmailValidationAlertService } from '../providers/email-validation-alert.service';

@NgModule({
    declarations: [
        Numbers,
        PopOverComponent,
        MyApp,
        Login,
        ForgotPasswordComponent,
        WelcomeComponent,
        FeedbackComponent,
    ],
    imports: [
        // HttpClientModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        ChartsModule,
        NgProgressModule,
        // NgxChartsModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: "",
            iconMode: "ios",
            modalEnter: "modal-slide-in",
            modalLeave: "modal-slide-out",
            tabsPlacement: "bottom",
            pageTransition: "ios-transition",
            scrollPadding: false,
            scrollAssist: false, // Valid options appear to be [true, false]
            autoFocusAssist: "delay" // Valid options appear to be ['instant', 'delay', false],

        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        //app
        MyApp,
        Login,
        ForgotPasswordComponent,
        WelcomeComponent,
        FeedbackComponent,
        
    ],
    providers: [
        Device,
        GetApiValidatorService,
        GoogleAnalytics,
        Clipboard,
        StatusBar,
        SplashScreen,
        SocialSharing,
        Network,
        FileTransfer,
        FileTransferObject,
        File,
        FileOpener,
        ImagePicker,
        Contacts,
        EmailComposer,
        AppVersion,
        zendeskService,
        CleverTap,
        FcmProvider,
        EmailValidationAlertService
    ]
})
export class AppModule { }
