import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ReportPage } from '../report/report';
import { SetTagsPage } from '../set-tags/set-tags';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  profileData: Observable<any>

  constructor(private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController,
    public events: Events) { }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
    })
  }

  setTagsPage() {
    this.navCtrl.push(SetTagsPage);
  }

  reportPage() {
    this.navCtrl.push(ReportPage);
  }

  exit() {
    this.events.publish('user:logout');
  }

}
