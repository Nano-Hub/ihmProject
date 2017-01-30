import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ProfilPage } from '../pages/profil/profil';
import { BonsPage } from '../pages/bons/bons';


@NgModule({
  declarations: [
    ConnexionPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilPage,
    BonsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConnexionPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BonsPage,
    ProfilPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
