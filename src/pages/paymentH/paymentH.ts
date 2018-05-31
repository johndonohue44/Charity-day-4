import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { RegisterPage } from "../register/register";



@Component({
  selector: "page-paymenth",
  templateUrl: "paymenth.html"
})
export class PaymentHPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

navigateToHistory() {
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