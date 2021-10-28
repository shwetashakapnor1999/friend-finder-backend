import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getToken()
  {
    return !!localStorage.getItem('token');
  }

  getTokenAdmin()
  {
    var res1=!!localStorage.getItem('token');
    var res2=localStorage.getItem('role')=="admin";
    return res1 && res2;
  }

  getTokenUser()
  {
    var res1=!!localStorage.getItem('token');
    var res2=localStorage.getItem('role')=="user";
    return res1 && res2;
  }
}
