import { NgModule } from "@angular/core";
import { ErrorMessagesComponent } from "./error-messages.component";
import { IonicModule } from "ionic-angular";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        ErrorMessagesComponent
    ],
    exports: [
        ErrorMessagesComponent
    ]
})
export class ErrorMessagesModule { }