import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CouponPage } from '../coupon/coupon';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

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
	leCoupon;
	mesCouponsDemandes;
	mesCouponsProposes;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private storage: Storage) {
	this.leCoupon={
		"boutique":''
	};
	this.initializeMesCoupons();
	this.initializeMesCouponsDemandes();
	this.initializeMesCouponsProposes();
  }

  initializeMesCoupons(){
  let param = {"token": this.storage.get('token').then((val) => {val})};
          this.http.get('http://localhost:3000/getMyCoupons', param) .map((res:any) => res.json()).subscribe(
                  (data) =>
                  {
                      console.log(data);
                    },
                  (err) => console.log(err)
                  );
	this.mesCoupons=[
	{
		"boutique":'Pimki',
		"reduction":'-5 €'
	},
	{
		"boutique":'Sephora',
		"reduction":'-10 €'
	}];

  }

  initializeMesCouponsDemandes(){
	this.mesCouponsDemandes=[
	{
		"boutique":'Chanel'
	},
	{
		"boutique":'Dior'
	}];

  }

  initializeMesCouponsProposes(){
	this.mesCouponsProposes=[
	{
		"boutique":'BricoRama',
		"reduction":'-8 €'
	},
	{
		"boutique":'Micromania',
		"reduction":'-12 €'
	}];

  }

  getMesCoupons(value) {
    // Reset items back to all of the items
    this.initializeMesCoupons();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.mesCoupons = this.mesCoupons.filter((coupon) => {
        return (coupon.boutique.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getMesCouponsProposes(value) {
    // Reset items back to all of the items
    this.initializeMesCouponsProposes();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.mesCouponsProposes = this.mesCouponsProposes.filter((coupon) => {
        return (coupon.boutique.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  demander(){
	this.mesCouponsDemandes.push(this.leCoupon);
  }

  use(value){
	  this.navCtrl.push(CouponPage,{
            boutique: value.boutique,
			reduction: value.reduction
          });
  }

  donner(value){
	//console.log(value.boutique);
	//this.mesCoupons = this.mesCoupons.splice(this.mesCoupons.indexOf(value), 1);
	//console.log(value.boutique);
	//this.mesCouponsProposes.push(value);
  }

  recuperer(){

  }

}
