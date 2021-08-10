import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { UserInterface } from "../model/user-interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  private logged = false;
  username: string = '';

  setLogged(b: boolean):void{
    this.logged = b;
  }

  loginUser(username: string, password: string): boolean{
    if(username=="john" && password=="p777"){
      this.username = 'John Doe'
      return true;
    }else{
      return false;
    }
  }

  isAuthenticated():boolean {
    //return this.logged;
    return true;
  }

  getUserFullName():string {
    return this.username;
  }
}
