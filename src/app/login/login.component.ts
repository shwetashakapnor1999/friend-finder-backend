import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _http: HttpClient,
    private _route: Router,
    private _requestURL: RequesturlsService
  ) {}

  requestURL: string = this._requestURL.requestURL_main + 'userlogin';
  msg: any;

  ngOnInit(): void {}
  onClickSubmit(userDetails: any) {
    console.log(userDetails);
    this._http.post(this.requestURL, userDetails).subscribe((data: any) => {
      if (data.response) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('_id', data.user._id);
        localStorage.setItem('name', data.user.name);
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('role', data.user.role);
        localStorage.setItem('info', data.user.info);
        localStorage.setItem('user_photo', data.user.user_photo);
        if (data.user.role == 'user')
          // this._route.navigate(['/userhome'])
          this._route.navigate(['/newsfeed']);
        else this._route.navigate(['/adminhome']);
      } else this.msg = 'Invalid User OR Please Verify Your Account';
    });
  }
}
