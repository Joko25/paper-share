import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./spinner.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";

@NgModule({
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class SpinnerModule { }