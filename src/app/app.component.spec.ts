import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { MyApp } from './app.component';
import { SpinnerComponent } from '../pages/spinner.component';
import { HttpModule } from '@angular/http';
import { IonicModule, Platform, NavController, AlertController, ModalController, ToastController } from 'ionic-angular';
import { PlatformMock } from '../../test-config/mocks-ionic';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { AuthenticationService } from '../providers/auth-service';
import { HttpHandlerService } from '../providers/http-handler-service';
import { SharedService } from '../providers/shared.service';
import { FormBuilder } from '@angular/forms';
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import { StatusBarMock, SplashScreenMock, NavControllerMock, NetworkMock, AlertControllerMock, ModalControllerMock, ToastControllerMock } from '../../test-config/mocks-two';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { AppVersion } from '@ionic-native/app-version';

describe('MyApp Component', () => {
  let fixture: ComponentFixture<MyApp>;
  let component: MyApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, SpinnerComponent],
      imports: [
        HttpModule,
        IonicModule.forRoot(MyApp),
      ],
      providers: [
        { provide: Platform, useClass: PlatformMock },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: Network, useFactory: () => NetworkMock.instance('OK') },
        { provide: AlertController, useFactory: () => AlertControllerMock.instance() },
        { provide: ModalController, useFactory: () => ModalControllerMock.instance() },
        { provide: ToastController, useFactory: () => ToastControllerMock.instance() },
        AuthenticationService,
        HttpHandlerService,
        SharedService,
        FormBuilder,
        FirebaseAnalytics,
        AppVersion,
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });


});