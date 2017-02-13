import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GerantPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gerant-page',
  templateUrl: 'gerant-page.html'
})
export class GerantPagePage {
	
	bonsGerant: string ="nosBons";
	nosCoupons;
	bon={boutique:'',reduction:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.initializeNosCoupons();
  }
  
  initializeNosCoupons(){
	this.nosCoupons=[
	{
		"boutique":'Pimki',
		"reduction":'-5 €'
	},
	{
		"boutique":'Pimki',
		"reduction":'-15 €'
	},
	{
		"boutique":'Pimki',
		"reduction":'-30 €'
	},
	{
		"boutique":'Pimki',
		"reduction":'-10 €'
	}];
  }
  
  getNosCoupons(value) {
    // Reset items back to all of the items
    this.initializeNosCoupons();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.nosCoupons = this.nosCoupons.filter((coupon) => {
        return (coupon.boutique.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  public createBon(){
	this.bon.boutique='Pimki';
	this.nosCoupons.push(this.bon);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerantPagePage');
  }

}
