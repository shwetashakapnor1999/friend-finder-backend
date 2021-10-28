import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthService , private _router:Router){}

  canActivate()
  {
    var res1=this._authService.getToken()
    var res2=localStorage.getItem('role')=='admin'
    if(res1 && res2)
      return true;
    else
    {
      localStorage.removeItem('token')
      this._router.navigate(['/login'])
      return false
    }  
  }
  
}
