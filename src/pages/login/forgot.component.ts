import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavController, AlertController, MenuController, Platform } from "ionic-angular";
import { AuthenticationService } from "../../providers/auth-service";
import { SharedService } from "../../providers/shared.service";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import { setScreenAnalytics } from "../../util/util";
import { App } from 'ionic-angular/components/app/app';

declare var UserExperior: any;
@Component({
  selector: "forgotPage",
  templateUrl: "forgot.component.html"
})
export class ForgotPasswordComponent {
  isLoading = false;
  submitAttempt = false;
  userData = {
    email: ""
  };
  forgotForm: FormGroup;

  constructor(
    public platform: Platform,
    public authService: AuthenticationService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    public sharedService: SharedService,
    public firebase: FirebaseAnalytics,
    public app: App
  ) {
    this.menuCtrl.enable(false, "disabled");
    this.forgotForm = formBuilder.group({
      email: ["", Validators.required]
    });
  }

  ionViewDidEnter() {
    setScreenAnalytics("forgot_password_open", this.firebase);
    if (this.platform.is('cordova')) {
      UserExperior.startScreen('Forgot Password');
    }
  }

  forgotPassword() {
    this.submitAttempt = true;
    this.userData = {
      email: this.forgotForm.controls.email.value
    };
    if (this.forgotForm.valid && this.submitAttempt) {
      this.isLoading = true;
      this.authService.resetPassword(this.userData).subscribe(
        data => {
          console.log("data", data);
          const alert = this.alertCtrl.create({
            title: "Lupa Password",
            subTitle: "reset password telah terkirim",
            buttons: ["OK"],
            cssClass: "successAlert"
          });
          alert.present();
          this.isLoading = false;
          this.navCtrl.pop();
          // this.app.navPop();
        },
        err => {
          if (err.status == 503) {
          } else {
            console.log("err", err);
            const alert = this.alertCtrl.create({
              subTitle: err.message,
              buttons: ["OK"],
              cssClass: "dangerAlert"
            });
            alert.present();
            this.isLoading = false;
          }
          // this.sharedService.failedEdit("Lupa Password");
        }
      );
    }
  }
}
