import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoginService } from '../../service/login-service';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { GerantPagePage } from '../gerant-page/gerant-page';
import { AdminPage } from'../admin/admin';

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
  userRegister = {login: '', mdp: ''};
  typeUser;


  constructor(private navCtrl: NavController, private service:LoginService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private navParams: NavParams)
  {
  }

  public login() {
    this.showLoading()
    this.service.connect(this.userlogin).subscribe(allowed =>{
		if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
		//faut initialiser avec ton api : this.typeUser 
		
		//ICI faudra mettre les bons niveaux possibles get par typeUser :*********************/
		if(this.typeUser=="user"){
			this.navCtrl.setRoot(TabsPage);
		}else if(this.typeUser=="admin"){
			this.navCtrl.setRoot(AdminPage);
		}else{
			this.navCtrl.setRoot(GerantPagePage);
		}
        });/************************************************************************************/
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
          this.showPopup("Success", "Account created. Veuillez vous connecter");
      } else {
        this.showPopup("Error", "Problem creating account.");
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
