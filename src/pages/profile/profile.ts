import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { CharityListPage } from '../charity-list/charity-list';
import { PaymentPage } from '../payment/payment';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
  }

  ionViewDidLoad() {
    this.user.username = this.navParams.get("username");
    this.user.password = this.navParams.get("password");
  }

  navToCharityList() {
    this.navCtrl.push(CharityListPage);
  }

}