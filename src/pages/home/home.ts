import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpPage } from '../help/help';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(page) {
    if (page === 'detail') {
      this.navCtrl.push(DetailPage);
    }
    // } else if (page === 'contact') {
    //   this.navCtrl.push(ContactPage);
    // }
  }

}
