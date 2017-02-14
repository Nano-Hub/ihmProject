import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
	bon={nom:'',reduction:'',delai:'',quantite:''};
	dateLimite;
	quantiteLimite;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
	  this.initializeNosCoupons();
  }

  initializeNosCoupons(){
      let param = localStorage.getItem('token');
    this.http.get('http://localhost:3000/getAllCouponsFromOurStore?token='+param).map((res:any) => res.json()).subscribe(
      (data) =>
      {
        console.log(data);
        this.nosCoupons=data;
      },
      (err) => console.log(err)
    );
	/*this.nosCoupons=[
	{
		"nom":'Pimki',
		"reduction":'-5 €',
		"delai":'',
		"quantite":''
	},
	{
		"nom":'Pimki',
		"reduction":'-15 €',
		"delai":'',
		"quantite":''
	},
	{
		"nom":'Pimki',
		"reduction":'-30 €',
		"delai":'',
		"quantite":''
	},
	{
		"nom":'Pimki',
		"reduction":'-10 €',
		"delai":'',
		"quantite":''
	}];*/
  }

  getNosCoupons(value) {
    // Reset items back to all of the items
    this.initializeNosCoupons();

    // set val to the value of the ev target
    var val = value.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.nosCoupons = this.nosCoupons.filter((coupon) => {
        return (coupon.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  public createBon(){
  var token = localStorage.getItem("token");
  let param = {"token": token, "reduction":this.bon.reduction, "delai":this.bon.delai, "quantite":this.bon.quantite};
  this.http.post('http://localhost:3000/addCouponFromStore', param).subscribe(
    data=>this.navCtrl.setRoot(GerantPagePage)
  );

}

	deleteCoupon(coupon){
		//delete le coupon
    let param = localStorage.getItem('token');
  this.http.delete('http://localhost:3000/deleteCouponFromStore?token='+param+'&id_coupon='+coupon.id_coupon).subscribe(
      data=>this.navCtrl.setRoot(GerantPagePage)
  );
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerantPagePage');
  }

}
