import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BonsPage } from '../bons/bons';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
		
	mesBons= BonsPage;
	marche= HomePage;
	profil= ProfilPage;

  constructor() {

  }
}
