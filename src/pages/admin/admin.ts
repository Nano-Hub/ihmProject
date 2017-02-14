import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the Admin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

	admin: string = "magasins";
	lesBoutiques;
	laBoutique;

  constructor(public navCtrl: NavController, private http:Http) {
	this.laBoutique={
				"nom":'',
				"code":''
	};
	 this.initializelesBoutiques();
  }

  initializelesBoutiques(){
    this.http.get('http://localhost:3000/getAllStore').map((res:any) => res.json()).subscribe(
      (data) =>
      {
        this.lesBoutiques=data;
      },
      (err) => console.log(err)
    );/*
	this.lesBoutiques=[
	{
		"nom":'Pimki',
		"code":'ABCDE'
	},
	{
		"nom":'Celio',
		"code":'705IZED'
	},
	{
		"nom":'Carrefour',
		"code":'HEZUR29'
	},
	{
		"nom":'Jules',
		"code":'NFUIZER9'
	},
	{
		"nom":'Sephora',
		"code":'UNEZF9'
	}];*/
  }


  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }*/

  getBoutique(value) {
    // Reset items back to all of the items
    this.initializelesBoutiques();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.lesBoutiques = this.lesBoutiques.filter((b) => {
        return (b.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  addBoutique(){

	if(this.laBoutique.nom === null){
		return "veuillez entrer un nom de boutique et un code";
	}else{
    var token = localStorage.getItem("token");
    //TODO DATA
    let param = {"token": token, 'nom':token};
    this.http.post('http://localhost:3000/createStore', param).subscribe(
    )
    this.initializelesBoutiques();
	}

	console.log("bon bon bon");

  }


  }
