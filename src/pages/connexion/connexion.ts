import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Connexion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  tabLog: string = "Connexion";


  constructor(public navCtrl: NavController, public navParams: NavParams)
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

}
