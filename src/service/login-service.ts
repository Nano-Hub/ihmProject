import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
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
 
  public connect(authentification) {
    if (authentification.login === null || authentification.mdp === null) {
      return Observable.throw("Veuillez entrer votre nom d'utilisateur et votre mot de passe");
    } else {
      return Observable.create(observer => {
        //let access = (authentification.mdp === "pass" && authentification.login === "email");
        //this.currentUser = new User('Jacques', 'azerty');
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public register(authentification) {
    if (authentification.login === null || authentification.mdp === null) {
      return Observable.throw("Veuillez entrer votre nom d'utilisateur et votre mot de passe");
    } else {
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
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