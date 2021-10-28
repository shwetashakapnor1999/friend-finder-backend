import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epadmin',
  templateUrl: './epadmin.component.html',
  styleUrls: ['./epadmin.component.css'],
})
export class EpadminComponent implements OnInit {
  name: string = '';
  username: string = '';

  userDetails: any;

  constructor(
    private _http: HttpClient,
    private _requestURL: RequesturlsService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    var requestURL = this._requestURL.requestURL_admin + 'epfetch';

    this._http
      .post(requestURL, { username: localStorage.getItem('username') })
      .subscribe((data: any) => {
        this.name = data.name;
        this.username = data.username;
      });
  }

  onClickSubmit(userDetails: any) {
    var requestURL = this._requestURL.requestURL_admin + 'upadminprofile';
    this._http.post(requestURL, userDetails).subscribe((data) => {
      alert('Admin Profile Updated');
      this._route.navigate(['/adminhome']);
      this.ngOnInit();
    });
  }
}
