import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';
import { SharePage } from '../pages/share/share';
import { RatePage } from '../pages/rate/rate';
import { ProfilePage } from '../pages/profile/profile';
import { EditOrderPage } from '../pages/edit-order/edit-order';
import { OrderSummaryPage } from '../pages/order-summary/order-summary';
import { AboutPage } from '../pages/about/about';
import { DetailPage } from '../pages/detail/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HelpPage,
    ContactPage,
    SharePage,
    RatePage,
    ProfilePage,
    EditOrderPage,
    OrderSummaryPage,
    AboutPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelpPage,
    ContactPage,
    SharePage,
    RatePage,
    ProfilePage,
    EditOrderPage,
    OrderSummaryPage,
    AboutPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
