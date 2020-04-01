import {
    ErrorHandler,
    NgModule
} from "@angular/core";
import { LoadingSmallComponent } from "../pages/loading.component";
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { PaperCurrencyDirective } from "../components/paper-currency.directive";
import { CurrencyService } from "../providers/currency-service";
import { CurrencyPipe } from "../pipes/currency-pipe";
import { CapitalizePipe } from "../pipes/capitalize.pipe";
import { PaperPlanesModule } from 'paper-planes';
import { MatTabsModule } from "@angular/material/tabs";
import { AccordionComponent } from "../components/accordion.component";
import { PaperHttp } from "../services/paper-http.service";
import { AuthenticationService } from "../providers/auth-service";
import { NetworkProvider } from "../providers/network";
import { SharedService } from "../providers/shared.service";
import { DateConverterService } from "../services/date-converter.service";
import { HttpHandlerService } from "../providers/http-handler-service";
import { SalesPersonService } from "../providers/sales-person.service";
import { SentryIonicErrorHandler } from "../services/sentry-errorhandler";
import { SocketService } from "../services/socket.service";
import { HttpModule, XHRBackend, RequestOptions } from "@angular/http";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SearchPipe } from "../pipes/search.pipe";
import { OrderByPipe } from "../pipes/order-by.pipe";
import { filterPipe } from "../pipes/filter-pipe";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { RichTextComponent } from '../components/rich-text/rich-text';
import { MatExpansionModule } from '@angular/material/expansion';
import { SpinnerModule } from "./spinner.module";
import { ErrorMessagesModule } from "../components/error-messages.module";
import { CleverTap } from '@ionic-native/clevertap';
import { ENV } from '@app/env';
import { SocketIoModule, SocketIoConfig } from "ng-socket-io";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import { FCM } from '@ionic-native/fcm';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { EmailValidationAlertService } from "../providers/email-validation-alert.service";
import { FirebaseMessaging } from '@ionic-native/firebase-messaging';

import * as Sentry from 'sentry-cordova';
const isProduction = ENV.production;

export function httpFactory(
    backend: XHRBackend,
    options: RequestOptions,
    httpHandlerService: HttpHandlerService,
    auth: AuthenticationService
) {
    return new PaperHttp(backend, options, httpHandlerService, auth);
}
@NgModule({
    declarations: [
        OrderByPipe,
        SearchPipe,
        filterPipe,
        LoadingSmallComponent,
        PaperCurrencyDirective,
        CurrencyPipe,
        CapitalizePipe,
        AccordionComponent,
        RichTextComponent
    ],
    providers: [
        CurrencyService,
        CurrencyPipe,
        CapitalizePipe,
        {
            provide: PaperHttp,
            useFactory: httpFactory,
            deps: [
                XHRBackend,
                RequestOptions,
                HttpHandlerService,
                AuthenticationService,
                NetworkProvider
            ]
        },
        SocketService,
        { provide: ErrorHandler, useClass: SentryIonicErrorHandler },
        AuthenticationService,
        NetworkProvider,
        SharedService,
        DateConverterService,
        HttpHandlerService,
        SalesPersonService,
        InAppBrowser,
        CleverTap,
        FirebaseAnalytics,
        FCM,
        EmailValidationAlertService,
        FirebaseMessaging
    ],
    imports: [
        HttpModule,
        CommonModule,
        PaperPlanesModule,
        MatTabsModule,
        IonicModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        SpinnerModule,
        ErrorMessagesModule,
    ],
    exports: [
        OrderByPipe,
        SearchPipe,
        filterPipe,
        //spinner
        //loading small
        LoadingSmallComponent,
        PaperCurrencyDirective,
        // CurrencyService,
        CurrencyPipe,
        CapitalizePipe,
        PaperPlanesModule,
        MatTabsModule,
        AccordionComponent,
        CommonModule,
        IonicModule,
        RichTextComponent,
        MatChipsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        MatExpansionModule,
        SpinnerModule,
        ErrorMessagesModule
    ]
})
export class CoreModule { }
