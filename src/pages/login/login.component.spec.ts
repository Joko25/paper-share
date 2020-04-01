
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { PaperHttp } from '../../services/paper-http.service';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { IonicModule, NavParams, Platform, ModalController, ToastController, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { httpFactory } from '../../pages/core.module';
import { HttpHandlerService } from '../../providers/http-handler-service';
import { NavController } from 'ionic-angular/index';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { ErrorMessagesComponent } from '../../components/error-messages.component';
import { SharedService } from '../../providers/shared.service';
import { SpinnerComponent } from '../spinner.component';
import { NavControllerMock, NavParamsMock, PlatformMock, ModalControllerMock, ToastControllerMock, AlertControllerMock, MenuControllerMock } from "../../../test-config/mocks-two";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FirebaseAnalyticsMocks } from "../../../test-config/mocks/firebase-analytics/index";
import { AuthenticationService } from '../../providers/auth-service';
import { Login } from './login.component';
import { blankLogin, validLogin, invalidUsername, invalidPassword } from '../../../test-config/model/login';

describe('login Component', () => {
  let fixture: ComponentFixture<Login>;
  let component: Login;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Login, ErrorMessagesComponent, SpinnerComponent],
      imports: [
        HttpModule,
        IonicModule.forRoot(Login),
      ],
      providers: [
        { provide: AlertController, useFactory: () => AlertControllerMock.instance() },
        { provide: ModalController, useFactory: () => ModalControllerMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: MenuController, useFactory: () => MenuControllerMock.instance() },
        { provide: NavParams, useFactory: () => NavParamsMock.instance() },
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: ToastController, useFactory: () => ToastControllerMock.instance() },
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
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
  });
  it('login should be created', () => {
    expect(component instanceof Login).toBe(true);
  });
  it('login should be have loginForm ', () => {
    expect(component.loginForm).toBeDefined();
  });
  it('login should loginForm be have username ', () => {
    expect(component.loginForm.controls.username).toBeDefined();
  });
  it('login should loginForm be have password ', () => {
    expect(component.loginForm.controls.password).toBeDefined();
  });
  it('login should have default props', (() => {
    component.loginForm.setValue(blankLogin);
    expect(component.loginForm.value).toEqual(blankLogin);
  }));
  it('form value login should create validLogin', () => {
    component.loginForm.setValue(validLogin);
    expect(component.loginForm.value).toEqual(validLogin);
  });
  it('loginForm validLogin login should valid', () => {
    component.loginForm.setValue(validLogin);
    expect(component.loginForm.valid).toBe(true);
  });
  it('form value login should create invalidUsername', () => {
    component.loginForm.setValue(invalidUsername);
    expect(component.loginForm.value).toEqual(invalidUsername);
  });
  it('loginForm invalidUsername login should valid', () => {
    component.loginForm.setValue(invalidUsername);
    expect(component.loginForm.valid).toBe(false);
  });
  it('form value login should create invalidPassword', () => {
    component.loginForm.setValue(invalidPassword);
    expect(component.loginForm.value).toEqual(invalidPassword);
  });
  it('loginForm invalidPassword login should invalid', () => {
    component.loginForm.setValue(invalidPassword);
    expect(component.loginForm.valid).toBe(false);
  });
});