import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Bons page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bons',
  templateUrl: 'bons.html'
})
export class BonsPage {
	bons: string = "mesBons";
	mesCoupons;
	rootPage=TabsPage;
	
  constructor(public navCtrl: NavController) {
	this.initializeMesCoupons();
  }
  
  initializeMesCoupons(){
	this.mesCoupons=[
		'Coupons 1',
		'Coupons 5'
	];
	
  }
  
  getMesCoupons(value) {
    // Reset items back to all of the items
    this.initializeMesCoupons();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.mesCoupons = this.mesCoupons.filter((coupon) => {
        return (coupon.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BonsPage');
  }

}
