import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';
import { ConnexionPage } from '../connexion/connexion';
import { GerantPagePage } from '../gerant-page/gerant-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	marche: string = "offreCommerce";
	coupons;
	admin;
	connect;
	gerant;
	constructor(public navCtrl: NavController) {
		this.admin=AdminPage;
		this.connect=ConnexionPage;
		this.gerant=GerantPagePage;
		this.initializeCoupons();
	}
	
	initializeCoupons(){
	this.coupons=[
	{
		"boutique":'Pimki',
		"reduction":'-5 €'
	},
	{
		"boutique":'Celio',
		"reduction":'-15 €'
	},
	{
		"boutique":'Carrefour',
		"reduction":'-30 €'
	},
	{
		"boutique":'Jules',
		"reduction":'-15 €'
	},
	{
		"boutique":'Sephora',
		"reduction":'-10 €'
	}];
  }
  
  getCoupons(value) {
    // Reset items back to all of the items
    this.initializeCoupons();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.coupons = this.coupons.filter((coupon) => {
        return (coupon.boutique.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
