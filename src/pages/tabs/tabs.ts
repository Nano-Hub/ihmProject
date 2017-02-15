import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BonsPage } from '../bons/bons';
import { ProfilPage } from '../profil/profil';
import { GerantPagePage } from '../gerant-page/gerant-page';
import { AdminPage } from '../admin/admin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
		
	mesBons= BonsPage;
	marche= HomePage;
	profil= ProfilPage;
	admin=AdminPage;
	gerant=GerantPagePage;
	adminCondition;
	bonCondition;
	marcheCondition;
	gerantCondition;

  constructor() {
	this.condition=false;
	let param = localStorage.getItem('token');

          this.http.get('http://localhost:3000/userType?token='+param).map((res:any) => res.json()).subscribe(
            (data) => {
              this.typeUser= data.type;
              if(this.typeUser=="gerant")
              {
				this.gerantCondition=true;
                this.adminCondition=false;
				this.bonCondition=false;
				this.marcheCondition=true;
				
              }
              else if(this.typeUser=="admin")
              {
                this.gerantCondition=false;
                this.adminCondition=true;
				this.bonCondition=false;
				this.marcheCondition=false;
              }
              else
              {
                this.gerantCondition=false;
                this.adminCondition=false;
				this.bonCondition=true;
				this.marcheCondition=true;
              }
	  
    );
  }
}
