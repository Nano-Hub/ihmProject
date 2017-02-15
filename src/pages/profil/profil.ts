import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the Profil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

	tabProfil: string = "Profil";
	personne;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http)
  {
    let param = localStorage.getItem('token');

    this.http.get('http://localhost:3000/getIdUser?token='+param).map((res:any) => res.json()).subscribe(
      (data) => this.personne.nom=data.id
        );
  }

  deconnecter()
  {
    console.log("appuie deco");
    var token = localStorage.getItem("token");
    let param = {"token": token};
    this.http.post('http://localhost:3000/disconnect', param).subscribe(
      data=>localStorage.removeItem("token")
    );
  }

  supprimer()
  {
      let param = localStorage.getItem('token');
    this.http.delete('http://localhost:3000/delete?token='+param).subscribe(
      data=>localStorage.removeItem("token")
    )
  }
}
