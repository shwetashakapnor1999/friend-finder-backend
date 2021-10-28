import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-friendscontent',
  templateUrl: './friendscontent.component.html',
  styleUrls: ['./friendscontent.component.css'],
})
export class FriendscontentComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _route: Router,
    private _requesturl: RequesturlsService
  ) {}

  data: any;

  requestURL: string = this._requesturl.requestURL_main;

  ngOnInit(): void {
    let userId = localStorage.getItem('_id');
    this._userService
      .getAllFriends(`${this.requestURL}getAllFriends`, { userId })
      .subscribe((data: any) => {
        console.log('data', data);
        this.data = data.result;
      });
  }
}
