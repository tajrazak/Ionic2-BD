import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import { Dashboard } from '../dashboard/dashboard';
import { LoginService } from './login.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {email:'',password:''};

  constructor(public navCtrl: NavController,
  private alertCtrl: AlertController,
  private loginservice:LoginService) {}

  userLogin(){
    this.loginservice.login(this.user)
    .subscribe(user=>{
      console.log(user);
      this.navCtrl.push(Dashboard);
      this.navCtrl.setRoot(Dashboard)
    },
    err=>{
      this.presentAlert('Login Failed',err.message);
    })
   /* if(_.isEqual(this.user,{name: "taj", password: "password"})){
       this.navCtrl.push(Dashboard);
       this.navCtrl.setRoot(Dashboard)
    }else{
      this.presentAlert('Login Failed','Incorrect username or password.');
    }*/
  }

  presentAlert(title:string,msg:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

}
