import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoginService } from '../../service/login-service';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { GerantPagePage } from '../gerant-page/gerant-page';
import { AdminPage } from '../admin/admin';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
  loading: Loading;
  createSuccess = false;
  userlogin = {login: '', mdp: ''};
  userRegister = {login: '', mdp: '',code:''};
  typeUser: string = '';


  constructor(private navCtrl: NavController, private service:LoginService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private navParams: NavParams,  private http: Http)
  {
  }

  public login() {
    this.showLoading()
    this.service.connect(this.userlogin).subscribe(allowed =>{
      if (allowed) {
        setTimeout(() => {
          this.loading.dismiss();
          /*let param = localStorage.getItem('token');

          this.http.get('http://localhost:3000/userType?token='+param).map((res:any) => res.json()).subscribe(
            (data) => {
              this.typeUser= data.type;
              if(this.typeUser=="gerant")
              {
                this.navCtrl.setRoot(GerantPagePage);
              }
              else if(this.typeUser=="admin")
              {
                this.navCtrl.setRoot(AdminPage);
              }
              else
              {
                this.navCtrl.setRoot(TabsPage);
              }
            }
          );*/
		  this.navCtrl.setRoot(TabsPage);
        });
      } else {
        console.log("oups oups");
        this.showError("Accès refusé !");
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Veuillez patienter...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  public register() {
    this.service.register(this.userRegister).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Succès", "Compte créer. Veuillez vous connecter");
      } else {
        this.showPopup("Erreur", "Il y a eu un problème.");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

}
