import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epuser',
  templateUrl: './epuser.component.html',
  styleUrls: ['./epuser.component.css'],
})
export class EpuserComponent implements OnInit {
  name: string = '';
  username: string = '';

  userDetails: any;

  constructor(
    private _http: HttpClient,
    private _requestURL: RequesturlsService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    var requestURL = this._requestURL.requestURL_user + 'epfetch';

    this._http
      .post(requestURL, { username: localStorage.getItem('username') })
      .subscribe((data: any) => {
        this.name = data.name;
        this.username = data.username;
      });
  }

  onClickSubmit(userDetails: any) {
    var requestURL = this._requestURL.requestURL_user + 'upuserprofile';
    this._http.post(requestURL, userDetails).subscribe((data) => {
      alert('User Profile Updated');
      this._route.navigate(['/newfeed']);
      this.ngOnInit();
    });
  }
}
