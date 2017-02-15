import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

export class User {
  login: string;
  mdp: string;

  constructor(login: string, mdp: string) {
    this.login = login;
    this.mdp = mdp;
  }
}

@Injectable()
export class LoginService {
  currentUser: User;

  constructor(private http: Http) {

  }

  public connect(authentification) {
    if (authentification.login === null || authentification.mdp === null) {
      return Observable.throw("Veuillez entrer votre nom d'utilisateur et votre mot de passe");
    } else {
      return Observable.create(observer => {
        let param = {"identifiant": authentification.login, "mot_de_passe": authentification.mdp};
        this.http.post('http://localhost:3000/login', param) .map((res:any) => res.json()).subscribe(
          (data) =>
          {
            localStorage.setItem('token',data.token);
            observer.next(true);
            observer.complete();
          },
          (err) => console.log(err)
        );
      });
    }
  }
  public register(authentification) {
    if (authentification.login === null || authentification.mdp === null) {
      return Observable.throw("Veuillez entrer votre nom d'utilisateur et votre mot de passe");
    } else {
      return Observable.create(observer => {
        let param = {"identifiant": authentification.login, "mot_de_passe": authentification.mdp, 'code_magasin': authentification.code};
        this.http.post('http://localhost:3000/register', param).subscribe(
          (data) =>
          {
            observer.next(true);
            observer.complete();
          },
          (err) => console.log(err)
        );
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
