import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { CharityListPage } from '../pages/charity-list/charity-list';
import { CharityProfilePage } from '../pages/charity-profile/charity-profile';
import { RegisterPage } from '../pages/register/register';
import { PaymentPage } from '../pages/payment/payment';
import { PaymentHPage } from '../pages/paymentH/paymentH';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    CharityListPage,
    CharityProfilePage,
    RegisterPage,
    PaymentPage,
    PaymentHPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProfilePage,
    CharityListPage,
    CharityProfilePage,
    RegisterPage,
    PaymentPage,
    PaymentHPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
