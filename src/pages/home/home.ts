import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	marche: string = "offreCommerce";
	coupons;
	
	constructor(public navCtrl: NavController) {
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
