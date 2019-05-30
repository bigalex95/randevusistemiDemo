import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';

import { ProfilPage } from '../profil/profil';
import { NewsPage } from '../news/news';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = ProfilPage;

  constructor(public navCtrl: NavController,
    public events: Events,
    public exit: Events) {
    events.subscribe('user:logout', () => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
