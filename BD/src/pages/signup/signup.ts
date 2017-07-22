import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import { Login } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {
  user = {email:'',password:'',name:''};
  constructor(public navCtrl: NavController,
  private alertCtrl: AlertController) {}

  redirectToLogin(){
    this.navCtrl.push(Login);
  }
}
