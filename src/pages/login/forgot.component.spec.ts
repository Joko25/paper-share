import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { PaperHttp } from '../../services/paper-http.service';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { IonicModule, MenuController, AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { httpFactory } from '../../pages/core.module';
import { HttpHandlerService } from '../../providers/http-handler-service';
import { NavController } from 'ionic-angular/index';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { ErrorMessagesComponent } from '../../components/error-messages.component';
import { SharedService } from '../../providers/shared.service';
import { SpinnerComponent } from '../spinner.component';
import { NavControllerMock, MenuControllerMock, AlertControllerMock } from "../../../test-config/mocks-two";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ForgotPasswordComponent } from './forgot.component';
import { AuthenticationService } from '../../providers/auth-service';
import { blankForgot, validForgot } from '../../../test-config/model/forgot';
import { FirebaseAnalyticsMocks } from "../../../test-config/mocks/firebase-analytics/index";

describe('forgot Component', () => {
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let component: ForgotPasswordComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent, ErrorMessagesComponent, SpinnerComponent],
      imports: [
        HttpModule,
        IonicModule.forRoot(ForgotPasswordComponent),
      ],
      providers: [
        { provide: MenuController, useFactory: () => MenuControllerMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: AlertController, useFactory: () => AlertControllerMock.instance() },
        { provide: FirebaseAnalytics, useClass: FirebaseAnalyticsMocks },
        {
          provide: PaperHttp,
          useFactory: httpFactory,
          deps: [XHRBackend, RequestOptions, HttpHandlerService]
        },
        FormBuilder,
        HttpHandlerService,
        AuthenticationService,
        SharedService, XHRBackend
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
  });

  it('forgot should be created', () => {
    expect(component instanceof ForgotPasswordComponent).toBe(true);
  });

  it('forgot should be have forgotForm ', () => {
    expect(component.forgotForm).toBeDefined();
  });

  it('forgot should forgotForm be have email ', () => {
    expect(component.forgotForm.controls.email).toBeDefined();
  });

  it('forgot should have default props', (() => {
    expect(component.forgotForm.value).toEqual(blankForgot);
  }));

  it('form value forgot should create validForgot', () => {
    component.forgotForm.setValue(validForgot);
    expect(component.forgotForm.value).toEqual(validForgot);
  });

  it('forgotForm validForgot forgot should valid', () => {
    component.forgotForm.setValue(validForgot);
    expect(component.forgotForm.valid).toBe(true);
  });
});