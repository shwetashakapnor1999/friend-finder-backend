import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-newsfeed-messages',
  templateUrl: './newsfeed-messages.component.html',
  styleUrls: ['./newsfeed-messages.component.css'],
})
export class NewsfeedMessagesComponent implements OnInit {
  username: any;
  user_photo: any;
  constructor(
    private _http: HttpClient,
    private _authService: AuthService,
    private _route: Router,
    private _requesturl: RequesturlsService
  ) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('_id');

    this._http
      .post(`${this._requesturl.requestURL_main}getUserProfile`, { userId })
      .subscribe((res: any) => {
        this.user_photo = res.user.user_photo;
        localStorage.setItem('user_photo', this.user_photo);
      });
  }
  checkTokenUser() {
    var res = this._authService.getTokenUser();
    if (res) console.log(res);
    this.username = localStorage.getItem('name');
    console.log(this.username);
    return res;
  }
}
