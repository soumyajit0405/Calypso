import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AuthServiceCustom } from '../providers/auth-service';
import { AccountService } from '../providers/account-service';
import { StoreService } from '../providers/store-service';

import { ActionService } from '../providers/action-service';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {RegisterPage} from "../pages/register/register";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MetricsPage } from '../pages/metrics/metrics';
import { SettingsPage } from '../pages/settings/settings';
import { OtpPage } from '../pages/otp/otp';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { PhoneinputPage } from '../pages/phoneinput/phoneinput';
import { PasswordPage } from '../pages/password/password';
import { ForgetpasswordPage } from '../pages/forgetpassword/forgetpassword';
import { ProfilePage } from '../pages/profile/profile';
import { AddcalypsoPage } from '../pages/addcalypso/addcalypso';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { EditcalypsoPage } from '../pages/editcalypso/editcalypso';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MetricsPage,
    SettingsPage,
    OtpPage,
    SignupPage,
    LoginPage,
	PhoneinputPage,
	PasswordPage,RegisterPage,ForgetpasswordPage,
	ProfilePage,
	AddcalypsoPage,
	ChangepasswordPage,
	EditcalypsoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule,HttpModule,ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MetricsPage,
    SettingsPage,
    OtpPage,
    SignupPage,
    LoginPage,
	PhoneinputPage,
	PasswordPage,RegisterPage,ForgetpasswordPage,
	ProfilePage,
	AddcalypsoPage,
	ChangepasswordPage,
	EditcalypsoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthServiceCustom,AccountService,ActionService,StoreService
  ]
})
export class AppModule {}
