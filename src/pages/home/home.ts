import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';
import { AdminPage } from '../admin/admin';
import { ConnexionPage } from '../connexion/connexion';
import { GerantPagePage } from '../gerant-page/gerant-page';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  marche: string = "offreCommerce";
  couponsUser;
  couponsStore;
  admin;
  connect;
  gerant;
  constructor(public navCtrl: NavController, private http: Http) {
    this.admin=AdminPage;
    this.connect=ConnexionPage;
    this.gerant=GerantPagePage;
    this.initializeCouponsFromStore();
    this.initializeCouponsFromUser();
  }

  initializeCouponsFromUser(){

    this.http.get('http://localhost:3000/getAllCouponsFromUser').map((res:any) => res.json()).subscribe(
      (data) =>
      {
        console.log(data);
        this.couponsUser=data;
      },
      (err) => console.log(err)
    );
  }
  initializeCouponsFromStore(){

    this.http.get('http://localhost:3000/getAllCouponsFromStore').map((res:any) => res.json()).subscribe(
      (data) =>
      {
        console.log(data);
        this.couponsStore=data;
      },
      (err) => console.log(err)
    );
    /*	this.coupons=[
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
}];*/
}

initializeCoupons(){

  this.http.get('http://localhost:3000/getAllCouponsAskedByUser').map((res:any) => res.json()).subscribe(
    (data) =>
    {
      console.log(data);
      this.couponsStore=data;
    },
    (err) => console.log(err)
  );
}

takeFromStore(value)
{
  var token = localStorage.getItem("token");
  var id_coupon = value.id_coupon;
  let param = {"id_coupon": id_coupon, "token": token};
  this.http.post('http://localhost:3000/takeCoupon', param).subscribe(
    data => this.navCtrl.setRoot(HomePage)
  );
}

takeFromUser(value)
{
  //TODO takeCouponFromUser
  var token = localStorage.getItem("token");
  var id_coupon = value.id_coupon;
  let param = {"id_coupon": id_coupon, "token": token};
  this.http.post('http://localhost:3000/takeCoupon', param).subscribe(
    data => this.navCtrl.setRoot(HomePage)
  );
}

getCouponsFromStore(value) {
  // Reset items back to all of the items
  this.initializeCouponsFromStore();

  // set val to the value of the ev target
  var val = value.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.couponsStore = this.couponsStore.filter((coupon) => {
      return (coupon.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

getCouponsFromUser(value) {
  // Reset items back to all of the items
  this.initializeCouponsFromUser();

  // set val to the value of the ev target
  var val = value.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.couponsUser = this.couponsUser.filter((coupon) => {
      return (coupon.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

getCoupons(value) {
  // Reset items back to all of the items
  this.initializeCoupons();

  // set val to the value of the ev target
  var val = value.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.couponsUser = this.couponsUser.filter((coupon) => {
      return (coupon.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

}
