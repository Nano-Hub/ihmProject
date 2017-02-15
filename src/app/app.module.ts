import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ProfilPage } from '../pages/profil/profil';
import { BonsPage } from '../pages/bons/bons';
import { AdminPage } from '../pages/admin/admin';
import { CouponPage } from '../pages/coupon/coupon';
import { LoginService } from '../service/login-service';
import { Http, Response, Headers, RequestOptions } from '@angular2/http';
import { GerantPagePage } from '../pages/gerant-page/gerant-page';

@NgModule({
  declarations: [
    ConnexionPage,
    MyApp,
    HomePage,
    TabsPage,
    ProfilPage,
    BonsPage,
	AdminPage,
	CouponPage,
	GerantPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConnexionPage,
    MyApp,
    HomePage,
    TabsPage,
    BonsPage,
    ProfilPage,
	AdminPage,
	CouponPage,
	GerantPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LoginService]
})
export class AppModule {}
