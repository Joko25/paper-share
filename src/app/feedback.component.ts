import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewController, ToastController } from 'ionic-angular';
import { SharedService } from '../providers/shared.service';
import { EmailComposer } from '@ionic-native/email-composer';
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";

@Component({
    selector: 'feedback',
    templateUrl: 'feedback.component.html'
})

export class FeedbackComponent {
    reportForm: FormGroup;
    isSubmitted = false;
    constructor(
        public viewCtrl: ViewController,
        public formBuilder: FormBuilder,
        public sharedService: SharedService,
        public emailComposer: EmailComposer,
        public toast: ToastController,
        public firebase: FirebaseAnalytics,
    ) {

    }
    ngOnInit() {
        this.reportForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            report: ['', Validators.required],
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }

    send(reportForm) {
        this.isSubmitted = true;
        if (this.reportForm.valid && this.isSubmitted) {
            let email = {
                to: 'support@paper.id',
                subject: 'Paper Ionic Bug',
                body: `nama : ${reportForm.value.name},<br><br> telepon : ${reportForm.value.phone},<br><br> isi report : ${reportForm.value.report}`,
                isHtml: true
            };
            this.emailComposer.open(email).then(res => {
                this.viewCtrl.dismiss();
            }).catch(err => {
                this.sharedService.failedCreate('Bug Report', err.message);
            });
        } else {
            this.sharedService.failedForm('Bug Report', 'Buat');
        }
    }
}