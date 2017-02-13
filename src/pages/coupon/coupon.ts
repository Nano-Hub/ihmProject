import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Coupon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html'
})
export class CouponPage {

	boutique: any;
	reduction: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.boutique=navParams.get("boutique");
	  this.reduction=navParams.get("reduction");
  }
  
  

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad CouponPage');
  }*/

}
