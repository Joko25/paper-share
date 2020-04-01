import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";

/*
  Generated class for the EmailValidationAlertServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmailValidationAlertService {

  constructor(
    public http: Http,
    public alertCtrl: AlertController
  ) {

  }

  presentConfirm(email) {
    let alert = this.alertCtrl.create({
      title: "Apakah Anda Yakin dengan Email ini?",
      message: "Email berikut tidak valid / terdeteksi dan kemungkinan tidak dapat menerima email dari kami" +
        `${'<div class=email-list>'} ${email} ${'</div>'}`,
      cssClass: 'validate-email-alert',
      buttons: [
        {
          text: 'Cek Kembali',
          cssClass: 'paper-button --paper-background-green --remove-box-shadow',
          handler: () => {
            alert.dismiss("recheck");
            return false;
          }
        },
        {
          text: 'Yakin. Lanjutkan',
          cssClass: 'alert-button-continue',
          handler: () => {
            alert.dismiss("continue");
            return false;
          }
        },
      ]
    });

    return alert;
  }

  // CT - This function receives the following as arguments:
  // An array of undeliverable email address(es) to be displayed
  // The number of undeliverable email address(es) and number of total email address in the emailbox
  presentConfirmMulti(email: Array<string>, undeliverable_email, mailbox_items) {
    let emailList = "";
    for (let i = 0; i < email.length; i++) {
      emailList += `${'<div class="email-list-item">' + email[i] + '</div>'}`;
    }
    let alert = this.alertCtrl.create({
      title: "Apakah Anda Yakin dengan Email ini?",
      message: `Email berikut (${undeliverable_email} dari ${mailbox_items} email) tidak valid / terdeteksi dan kemungkinan tidak dapat menerima email dari kami
                  ${'<div class=email-list>'} ${emailList} ${'</div>'}`,
      cssClass: 'validate-email-alert',
      buttons: [
        {
          text: 'Cek Kembali',
          cssClass: 'paper-button --paper-background-green --remove-box-shadow',
          handler: () => {
            alert.dismiss("recheck");
            return false;
          }
        },
        {
          text: 'Yakin. Lanjutkan',
          cssClass: 'alert-button-continue',
          handler: () => {
            alert.dismiss("continue");
            return false;
          }
        },
      ]
    });

    return alert;
  }

}