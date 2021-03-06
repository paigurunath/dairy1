import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';
import { SharePage } from '../pages/share/share';
import { RatePage } from '../pages/rate/rate';
import { ProfilePage } from '../pages/profile/profile';
import { EditOrderPage } from '../pages/edit-order/edit-order';
import { OrderSummaryPage } from '../pages/order-summary/order-summary';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Address', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Edit Order', component: EditOrderPage },
      { title: 'Order Summary', component: OrderSummaryPage },
      { title: 'Help ?', component: HelpPage },
      { title: 'Rate us', component: RatePage },
      { title: 'Share', component: SharePage },
      { title: 'Contact Us', component: ContactPage },
      { title: 'About Us', component: AboutPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
