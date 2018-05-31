import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProfilePage } from "../profile/profile";
import { User } from '../../models/user';



@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }


  
  login() {
    this.navCtrl.push(ProfilePage, {
      username: this.username,
      password: this.password
    });
  }
}