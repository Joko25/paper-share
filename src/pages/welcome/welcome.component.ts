import { Component, ViewChild } from "@angular/core";
import { App, NavController, Platform, Slides, ToastController } from "ionic-angular";
import { setScreenAnalytics } from "../../util/util";
import { Login } from "../login/login.component";

@Component({
    selector: "welcome-component",
    templateUrl: "welcome.component.html"
})
export class WelcomeComponent {
    @ViewChild(Slides) slides: Slides;
    login: any;
    register: any;
    dashboard: any;
    splash = true;

    registerBackButton: Function;

    constructor(
        public platform: Platform,
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public app: App
    ) {
        this.login = Login;
    }

    ionViewDidEnter() {
    }
    goToSlide() {
        this.slides.slideTo(2, 500);
    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.splash = false;
        }, 4000);
    }
}
