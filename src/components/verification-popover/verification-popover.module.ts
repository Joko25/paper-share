import { NgModule } from '@angular/core';
import { VerificationPopoverComponent } from './verification-popover';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
    declarations: [
        VerificationPopoverComponent,
    ],
    imports: [
        IonicPageModule.forChild(VerificationPopoverComponent)
    ],
    exports: [
        VerificationPopoverComponent,
    ],
    entryComponents: [
        VerificationPopoverComponent
    ]
})
export class VerificationPopoverComponentModule { }
