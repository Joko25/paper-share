import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, App, Events, MenuController, NavController, Platform, ToastController } from "ionic-angular";
import * as moment from "moment";
import { forkJoin } from "rxjs/observable/forkJoin";
import { Observable } from "rxjs/Observable";
import { setEventAnalytics, setScreenAnalytics, setUserIdAnalytics } from "../../util/util";
import { ForgotPasswordComponent } from "./forgot.component";

declare var UserExperior: any;
@Component({
    selector: "loginPage",
    templateUrl: "login.component.html"
})
export class Login implements OnInit, OnDestroy {
    isLoading = false;
    isLoadingEmail = false;
    submitAttempt = false;
    userData = {
        email: "",
        password: "",
        ttl: "31104000"
    };
    forgotPassword: any = ForgotPasswordComponent;
    loginForm: FormGroup;
    //back-button
    registerBackButton: Function;
    isActiveToggleTextPassword: Boolean = true;
    referral_code = '';
    response = null;
    type_input;
    register_value = "LANJUT";
    input_valid = false;
    mask_value = true;
    password_valid;
    password_type = "password";
    password_value = "Password";
    currentEmail = "";
    type_action: string = null;

    constructor(
        public platform: Platform,
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        public menuCtrl: MenuController,
        public toastCtrl: ToastController,
        public events: Events,
        public app: App
    ) {
        this.menuCtrl.enable(false, "disabled");
        this.loginForm = formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    ionViewDidEnter() {
       
    }

    ngOnInit() {
        this.loginForm.controls.email.valueChanges.debounceTime(1000).subscribe(
            value => {
                this.validateInput(value);
            }
        );
    }

    ngOnDestroy() {

    }

    public login() {
        this.submitAttempt = true;
        this.userData = {
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value,
            ttl: "31104000"
        };
        console.log("login", this.userData);
        let postLoginData;
        if (this.loginForm.valid && this.submitAttempt) {
            console.log("login form valid");
            this.isLoading = true;
            


        }
    }

    public toggleTextPassword(): void {
        this.isActiveToggleTextPassword =
            this.isActiveToggleTextPassword == true ? false : true;
        console.log("show hide", this.isActiveToggleTextPassword);
    }
    public getType() {
        console.log("show hide get type", this.isActiveToggleTextPassword);
        return this.isActiveToggleTextPassword ? "password" : "text";
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

    validateInput(email) {
        let input = String(email).toLowerCase();
        // let testMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let testMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        // let testNumber = /^[0][8]\d*$/;
        // if (testNumber.test(input) && input.length >= 10) {
        //     this.type_input = "Mobile"
        //     this.register_value = "daftar";
        if (testMail.test(input)) {
            this.isLoadingEmail = true;
            this.type_input = "Email";
            this.register_value = "daftar";
            this.input_valid = true;
        } else {
            this.type_input = "";
            this.register_value = "lanjut";
            this.input_valid = false;
            this.type_action = null;
        }
    }

    mask() {
        this.mask_value = true;
        this.password_type = "password";
        console.log(this.mask_value, "mask");
    }

    unmask() {
        this.mask_value = false;
        this.password_type = "text";
        console.log(this.mask_value, "unmask");
    }

    validatePassword() {
        if (this.loginForm.controls.password_confirmation.value != "") {
            if (this.loginForm.controls.password.value === this.loginForm.controls.password_confirmation.value) {
                this.password_valid = true;
                this.password_value = "Konfirmasi Kata Sandi Sudah Sama";
            } else {
                this.password_valid = false;
                this.password_value = "Konfirmasi Kata Sandi Tidak Sama";
            }
        }
    }

    
}
