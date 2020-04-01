// import { HomePage } from '../pages/home/home.component';
// import { Subscription } from 'rxjs/Subscription';
import { Injectable, ElementRef, EventEmitter } from "@angular/core";
import {
    Platform,
    AlertController,
    ModalOptions,
    ModalController,
    App,
    ToastController,
} from "ionic-angular";
import { Observable } from "rxjs";
import { PaperHttp } from "../services/paper-http.service";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import { setEventAnalytics } from "../util/util";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SharedService {
    homeEmitter: EventEmitter<any> = new EventEmitter();
    rootPage: any;

    private numberOfListSource = new BehaviorSubject<any>([]);
    public numberOfList$ = this.numberOfListSource.asObservable();

    images_product;

    constructor(
        public platform: Platform,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public firebase: FirebaseAnalytics,
        public http: PaperHttp,
        private toastCtrl: ToastController,
        public app: App
    ) { }

    //modal not full
    modalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        cssClass: "modal-custom"
    };

    // sorting and filter
    filter: any = {};
    sort: any = {
        field: "",
        reverse: false
    };
    setFilter(filter) {
        this.filter = filter;
    }
    getFilter() {
        return this.filter;
    }
    setSort(sort) {
        this.sort = sort;
    }
    getSort() {
        return this.sort;
    }
    clearFilterAndSort() {
        this.filter = {};
        this.sort = {
            field: "",
            reverse: false
        };
    }

    // search global
    clickSearch(search, elementSearch) {
        search.value = !search.value;
        setTimeout(() => {
            elementSearch.setFocus();
        }, 200);
    }
    clickClear(elementSearch) {
        setTimeout(() => {
            elementSearch.setFocus();
        }, 200);
    }

    //resize ion-textarea
    resize(input: ElementRef) {
        var element = input["_elementRef"].nativeElement.getElementsByClassName(
            "text-input"
        )[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + "px";
        input["_elementRef"].nativeElement.style.height = scrollHeight + 16 + "px";
    }

    //register back button
    registerBackButton(
        platform: any,
        navCtrl: any,
        toast: any,
        componentName: any,
        app: any
    ) {
        let countBack = 0;

        var pagesList: Array<any> = ["HomePage", "WelcomeComponent", "Login", "ClientComponent", "InvoiceComponent", "PurchaseInvoiceComponent", "SalesOrderComponent", "PurchaseOrderComponent", "PaymentComponent", "PaymentSendComponent", "FinanceComponent", "FinanceTransactionComponent", "ExpenseComponent", "ProductComponent", "CategoryComponent", "ReportMenuPage", "SettingComponent"];

        var component = pagesList.find(
            data => {
                return data == componentName;
            }
        );
        console.log("active: ", component, " name: ", pagesList);

        platform.registerBackButtonAction(() => {

            let updated = localStorage.getItem("updated");
            const overlayView = app._appRoot._overlayPortal._views[0];

            if (overlayView && overlayView.dismiss && updated != '1') {
                overlayView.dismiss();
            }
            // if (componentName == "HomePage" || componentName == "WelcomeComponent" || componentName == "Login") {
            else if (component == componentName || updated == '1') {
                countBack = countBack + 1;
                if (countBack <= 1) {
                    let toaster = toast.create({
                        message: "press back once more to exit the app",
                        duration: 2000,
                        position: "bottom"
                    });
                    toaster.present();
                } else {
                    platform.exitApp();
                }
                // } else if(component== componentName){
                //   // this.rootPage = HomePage;
                //   return this.app.navPop();
            }
            else {
                return navCtrl.pop();
            }
        }, 1);
    }

    // allert all
    troubleError: string = "Please try again later or contact support@paper.id";//Sorry, please check your connection or there is something wrong with the server

    failed() {
        let cekNetwork = localStorage.getItem("connection-error");

        if (cekNetwork == '1') {
            let toaster = this.toastCtrl.create({
                message: "Please try again later or contact support@paper.id",
                duration: 2000,
                position: "bottom"
            });
            toaster.present();
        }
    }

    noConnection() {
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
            // if (ceknet == '0') this.pService.start();
        });

        toast.present();
    }

    displayToastError(message: string) {
        const toast = this.toastCtrl.create({
            message: message,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Mengerti",
            cssClass: 'toast-network'
        });

        toast.present();

        return toast.onDidDismiss(() => {
            console.log('Dismissed toast');
            return true;
        });

    }

    displayToastSuccess(message: string) {
        const toast = this.toastCtrl.create({
            message: message,
            position: 'bottom',
            cssClass: 'toast-success',
            duration: 2500
        });

        toast.present();

        return toast.onDidDismiss(() => {
            console.log('Dismissed toast');
            return true;
        });

    }

    failedFind(type: string, error_message?: any) {
        let cekNetwork = localStorage.getItem("connection-error");

        if (cekNetwork == '1') {
            let message = "";
            if (typeof error_message == "string") {
                message = error_message;
            } else {
                for (var key in error_message) {
                    message = message + error_message[key][0] + "\n";
                }
            }
            var msg = message && typeof message === "string" ? message : this.troubleError;

            let toast = this.toastCtrl.create({
                message: 'Cari ' + type + ' Gagal : ' + msg,
                duration: 5000,
                position: 'bottom',
                cssClass: 'toast-network'
            });

            toast.present();
        }
    }

    failedForm(type: string, action: string) {
        const alert = this.alertCtrl.create({
            title: `${action} ${type} Gagal`,
            subTitle: `Tolong periksa Formulir`,
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_${action}_${type}`, this.firebase, null);
    }

    successCreate(type: string, message: any) {
        const alert = this.alertCtrl.create({
            title: "Sukses",
            subTitle: message && typeof message === "string" ? message : "Berhasil",
            buttons: ["Tutup"],
            cssClass: "successMessageCustom"
        });
        alert.present();
        setEventAnalytics(`success_create_${type}`, this.firebase, null);
    }

    failedCreate(type: string, error_message?: any) {
        let message = "";
        if (typeof error_message == "string") {
            message = error_message;
        } else {
            for (var key in error_message) {
                message = message + error_message[key][0] + "\n";
            }
        }
        const alert = this.alertCtrl.create({
            title: `Buat ${type} Gagal`,
            subTitle:
                message && typeof message === "string" ? message : this.troubleError,
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_create_${type}`, this.firebase, null);
    }

    failedUpload(type: string, error_message?: any) {
        let message = "";
        if (typeof error_message == "string") {
            message = error_message;
        } else {
            for (var key in error_message) {
                message = message + error_message[key][0] + "\n";
            }
        }
        const alert = this.alertCtrl.create({
            title: `Upload ${type} Gagal`,
            subTitle: message ? message : "Ukuran harus Lebih kecil \n atau sama dengan 2000 pixels",
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_upload`, this.firebase, null);
    }

    successEdit(type: string, message: any) {
        const alert = this.alertCtrl.create({
            title: `Ubah ${type} Berhasil`,
            subTitle:
                message && typeof message === "string" ? message : "Ubah Berhasil",
            buttons: ["Tutup"],
            cssClass: "successMessageCustom"
        });
        alert.present();
        setEventAnalytics(`success_update`, this.firebase, null);
    }

    failedEdit(type: string, error_message?: any) {
        let message = "";
        if (typeof error_message == "string") {
            message = error_message;
        } else {
            for (var key in error_message) {
                message = message + error_message[key][0] + "\n";
            }
        }
        const alert = this.alertCtrl.create({
            title: `Ubah ${type} Gagal`,
            subTitle:
                message && typeof message === "string" ? message : this.troubleError,
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_update`, this.firebase, null);
    }

    successDelete(type: string, message: any) {
        const alert = this.alertCtrl.create({
            title: `Hapus ${type} Berhasil`,
            subTitle:
                message && typeof message === "string" ? message : "Hapus Berhasil",
            buttons: ["Tutup"],
            cssClass: "successMessageCustom"
        });
        alert.present();
        setEventAnalytics(`success_delete`, this.firebase, null);
    }

    failedDelete(type: string, error_message?: any) {
        let message = "";
        if (typeof error_message == "string") {
            message = error_message;
        } else {
            for (var key in error_message) {
                message = message + error_message[key][0] + "\n";
            }
        }
        const alert = this.alertCtrl.create({
            title: `Hapus ${type} Gagal`,
            subTitle:
                message && typeof message === "string" ? message : this.troubleError,
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_delete`, this.firebase, null);
    }

    successChangeStatusInv() {
        const alert = this.alertCtrl.create({
            title: "Status Berhasil Diubah",
            subTitle: "Status Invoice, berhasil Diubah",
            buttons: ["Tutup"],
            cssClass: "successMessageCustom"
        });
        alert.present();
        setEventAnalytics(`success_change_status_invoice`, this.firebase, null);
    }

    successChangeStatusOrd() {
        const alert = this.alertCtrl.create({
            title: "Status Berhasil Diubah",
            subTitle: "Status Order, berhasil Diubah",
            buttons: ["Tutup"],
            cssClass: "successMessageCustom"
        });
        alert.present();
        setEventAnalytics(`success_change_status_order`, this.firebase, null);
    }

    failedChangeStatusInv() {
        const alert = this.alertCtrl.create({
            title: "Status Gagal Diubah",
            subTitle: "Status Invoice, Gagal Diubah",
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_change_status_invoice`, this.firebase, null);
    }

    failedChangeStatusOrd() {
        const alert = this.alertCtrl.create({
            title: "Status Gagal Diubah",
            subTitle: "Status Order, Gagal Diubah",
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_change_status_invoice`, this.firebase, null);
    }

    successChangeStatus() {
        const alert = this.alertCtrl.create({
            title: "Status Berhasil Diubah",
            subTitle: "Status Transaksi, berhasil Diubah",
            buttons: ["Tutup"],
            cssClass: "successMessageCustom"
        });
        alert.present();
        setEventAnalytics(`success_change_status_transaction`, this.firebase, null);
    }

    failedChangeStatus() {
        const alert = this.alertCtrl.create({
            title: "Status Gagal Diubah",
            subTitle: "Status Transaksi, Gagal Diubah",
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_change_status_transaction`, this.firebase, null);
    }

    successRegister() {
        // const alert = this.alertCtrl.create({
        //     title: "Daftar Berhasil",
        //     subTitle: "Akun Telah Terbuat, Please Login",
        //     buttons: ["Tutup"],
        //     cssClass: "successMessageCustom"
        // });
        // alert.present();
        setEventAnalytics(`success_register`, this.firebase, null);
    }

    faildRegister(error_message?: any) {
        let message = "";
        if (typeof error_message == "string") {
            message = error_message;
        } else {
            for (var key in error_message) {
                message = message + error_message[key][0] + "\n";
            }
        }
        const alert = this.alertCtrl.create({
            title: "Daftar Gagal",
            subTitle:
                message && typeof message === "string" ? message : this.troubleError,
            buttons: ["Tutup"],
            cssClass: "dangerAlertCustom"
        });
        alert.present();
        setEventAnalytics(`failed_register`, this.firebase, null);
    }

    getBrowser() {
        var ua = navigator.userAgent,
            tem,
            M =
                ua.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                ) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return "IE " + (tem[1] || "");
        }
        if (M[1] === "Chrome") {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                return tem
                    .slice(1)
                    .join(" ")
                    .replace("OPR", "Opera");
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(" ");
    }

    setCampaignBanner(modal_name, expiry_time: string) {
        console.log("modal_timeout set", expiry_time)
        localStorage.setItem(modal_name, expiry_time);
        localStorage.getItem(modal_name);
        console.log("campaign_modal_timeout set name", modal_name)
        console.log("campaign_modal_timeout timeout ", expiry_time)
    }

    getCampaignBanner(modal_name: string) {
        let modal_timeout = localStorage.getItem(modal_name);
        console.log("campaign_modal_timeout get modal name ", modal_name)
        console.log("campaign_modal_timeout get modal timeout", modal_timeout)
        return JSON.parse(modal_timeout);
    }

    setCityUser(city: string) {
        localStorage.setItem("city", city);
    }
    getCityUser() {
        return localStorage.getItem("city");
    }

    getCurrentIp(): Observable<any> {
        return this.http
            .get("https://api.ipify.org/?format=json")
            .map(response => response.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error.json());
            });
    }

    getCurrentCityByIp(ip: string): Observable<any> {
        return this.http
            .get(
                `https://api.ipinfodb.com/v3/ip-city/?key=20b96dca8b9a5d37b0355e9461c66e76eed30a2274422fa6213d9de6ffb2b34e&ip=${ip}&format=json`
            )
            .map(response => response.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error.json());
            });
    }

    updateNumberOfList(event: any) {
        console.log('number of list', event);
        this.numberOfListSource.next(event);
    }

    getMaxYears() {
        let date = new Date().toISOString();
        let maxyear = parseInt(date.substring(0, 4)) + 10;
        return maxyear.toString() + "-12-31";
    }

    setImagesProduct(data) {
        this.images_product = data;
    }

    getImagesProduct() {
        return this.images_product;
    }
    validateFileSize(image_file) {
        if (!(image_file && image_file.size)) {
            return false;
        }
        // YS: 2MB max
        console.log("image_file", image_file);
        if (image_file.size >= 2202009) {
            return false;
        }
        return true;
    }
}
