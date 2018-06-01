import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { RegisterPage } from "../register/register";
import { PaymentHPage } from "../paymentH/paymentH";


@Component({
  selector: "page-payment",
  templateUrl: "payment.html"
})
export class PaymentPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  navigateToPaymentH() {
      this.navCtrl.push(PaymentHPage);
  }

  navigateToRegister() {
    this.navCtrl.push(RegisterPage);
    }

  login() {
    this.navCtrl.push(ProfilePage, {
      username: this.username,
      password: this.password
    });
  }
}