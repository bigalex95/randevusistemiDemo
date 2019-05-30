import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpPage } from '../sign-up/sign-up';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    if (user.email && user.password) {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
          console.log(data.user);
          this.navCtrl.push(TabsPage);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  register() {
    this.navCtrl.push(SignUpPage);
  }

}
