import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CouponPage } from '../coupon/coupon';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
  mesCouponsMemoire;
  leCoupon;
  mesCouponsDemandes;
  mesCouponsProposes;
  mesCouponsProposesMemoire;
  boutiquesList;
  data: string ="";
  boutiqueChoisie;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.leCoupon={
      "boutique":''
    };
    this.initializeMesCoupons();
    this.initializeMesCouponsDemandes();
    this.initializeMesCouponsProposes();

    this.http.get('http://localhost:3000/getPossibleAskedOffer').map((res:any) => res.json()).subscribe(
      (data) => this.boutiquesList=data
    );
	/*this.boutiquesList=[
	{
		"nom":'Chanel'
	},
	{
		"nom":'Dior'
	}];*/
  }

  initializeMesCoupons(){
    let param = localStorage.getItem('token');

    this.http.get('http://localhost:3000/getMyCoupons?token='+param).map((res:any) => res.json()).subscribe(
      (data) =>
      {
        console.log(data);
        this.mesCoupons=data;

		this.mesCouponsMemoire=data;

      },
      (err) => console.log(err)
    );
    /*this.mesCoupons=data;[
    {
    "boutique":'Pimki',
    "reduction":'-5 €'
  },
  {
  "boutique":'Sephora',
  "reduction":'-10 €'
}];*/

}

initializeMesCouponsDemandes(){
  let param = localStorage.getItem('token');

  this.http.get('http://localhost:3000/getCouponsAskedByUser?token='+param).map((res:any) => res.json()).subscribe(
    (data) =>
    {
      console.log(data);
      this.mesCouponsDemandes=data;
    },
    (err) => console.log(err)
  );
}

initializeMesCouponsProposes(){
  let param = localStorage.getItem('token');

  this.http.get('http://localhost:3000/getAllCouponsOfferedByUser?token='+param).map((res:any) => res.json()).subscribe(
    (data) =>
    {
      console.log(data);
      this.mesCouponsProposes=data;
      this.mesCouponsProposesMemoire=data;
    },
    (err) => console.log(err)
  );
}
  /*this.mesCouponsProposes=[
  {
  "boutique":'BricoRama',
  "reduction":'-8 €'
},
{
"boutique":'Micromania',
"reduction":'-12 €'
}];*/


getMesCoupons(value) {
  // Reset items back to all of the items
   this.mesCoupons=this.mesCouponsMemoire;
  // set val to the value of the ev target
  var val = value.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.mesCoupons = this.mesCoupons.filter((coupon) => {
      return (coupon.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

getMesCouponsProposes(value) {
  // Reset items back to all of the items
  this.mesCouponsProposes=this.mesCouponsProposesMemoire;

  // set val to the value of the ev target
  var val = value.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.mesCouponsProposes = this.mesCouponsProposes.filter((coupon) => {
      return (coupon.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

demander(){
  var token = localStorage.getItem("token");
  let param = {"token": token, "id_magasin": this.boutiqueChoisie}
  this.http.post('http://localhost:3000/askCoupon', param).subscribe(
    data=>
      this.navCtrl.setRoot(BonsPage)
  );
}

use(value){
  this.navCtrl.push(CouponPage,{
    boutique: value.boutique,
    reduction: value.reduction
  });
}

donner(value){
  var token = localStorage.getItem("token");
  var id_coupon = value.id_coupon;
  let param = {"id_coupon": id_coupon, "token": token};
  this.http.post('http://localhost:3000/addCouponFromUser', param).subscribe(
    data=>this.navCtrl.setRoot(BonsPage)
  );
}

recuperer(value){
  var token = localStorage.getItem("token");
  var id_coupon = value.id_coupon;
  console.log(id_coupon);
  let param = {"id_coupon": id_coupon, "token": token};
  this.http.post('http://localhost:3000/stopGivingCoupon', param).subscribe(
      data=>this.navCtrl.setRoot(BonsPage)
  );
}

}
