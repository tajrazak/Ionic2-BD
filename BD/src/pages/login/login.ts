import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  changeToList(){
    this.navCtrl.push(ListPage);
    this.navCtrl.setRoot(ListPage)
  }

}
