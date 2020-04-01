import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPage, ViewController } from 'ionic-angular';

/**
 * Generated class for the VerificationPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
    selector: 'verification-popover',
    templateUrl: 'verification-popover.html'
})
export class VerificationPopoverComponent {
    title = "Halaman Pembayaran Digital";
    content1 = "Mau Biaya Pencairan Pembayaran Digital Hanya 0%* dan Terima Dana dalam Hitungan Jam?";
    content2 = "Verifikasi Perusahaan Kamu Sekarang.";
    footer = "*Biaya pencairan transaksi kartu kredit hanya 1%";
    constructor(
        public viewCtrl: ViewController,
        private iab: InAppBrowser
    ) {
    }

    close() {
        this.viewCtrl.dismiss();
    }

    validate() {
        this.viewCtrl.dismiss().then(
            () => {
                // window.open('https://forms.gle/aXFKNSwE852ii11t9', '_blank');
                let options: any = {
                    zoom: 'no',
                    location: 'no',
                    hidenavigationbuttons: 'no'
                }
                this.iab.create('https://docs.google.com/forms/d/e/1FAIpQLSdKWhJKazjkPdjBbpyySP_V1NHxlpVB4XKvpjb6Bg8MZT7ESg/viewform', '_blank', options);
            }
        );
    }

}
