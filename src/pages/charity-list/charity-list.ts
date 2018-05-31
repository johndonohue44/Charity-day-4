import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { CharityProfilePage } from '../charity-profile/charity-profile';
import { PaymentPage } from '../payment/payment';


@Component({
  selector: 'page-charity-list',
  templateUrl: 'charity-list.html',
})
export class CharityListPage {

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // Instantiate a new Charity instance for Fair Harbor
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "Fair Harbor";
    charity1.description = "Help recycle plastic bottles into swimwear and protect our oceans!";

    // Instantiate a new Charity instance for Dogs
    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Elephants";
    charity2.description = "Save these guys from ivory poachers!";

    //Instantiate a new Charity instance for Ocean
    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Ocean";
    charity3.description = "water water water";

    // Add our 2 charity instances to our collection of charities
    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityListPage');
  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
      charity: charity
    });
  }

}