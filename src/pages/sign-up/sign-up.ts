import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { CreateProfilePage } from '../create-profile/create-profile';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  register(user: User) {
    if (user.email && user.password) {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
          console.log(data.user);
          this.navCtrl.setRoot(CreateProfilePage);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  back() {
    this.navCtrl.popToRoot();
  }

}
