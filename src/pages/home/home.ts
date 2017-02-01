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
	rootPage=TabsPage;
	
	constructor(public navCtrl: NavController) {
		this.initializeCoupons();
	}
	
	initializeCoupons(){
	this.coupons=[
		'Coupons 1',
		'Coupons 2',
		'Coupons 3',
		'Coupons 4',
		'Coupons 5'
		];
  }
  
  getCoupons(value) {
    // Reset items back to all of the items
    this.initializeCoupons();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.coupons = this.coupons.filter((coupon) => {
        return (coupon.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
