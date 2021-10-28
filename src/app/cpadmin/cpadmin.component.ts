import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpadmin',
  templateUrl: './cpadmin.component.html',
  styleUrls: ['./cpadmin.component.css'],
})
export class CpadminComponent implements OnInit {
  constructor(
    private _http: HttpClient,
    private _requestURL: RequesturlsService,
    private _route: Router
  ) {}

  msg: any;

  ngOnInit(): void {}

  onClickSubmit(cpdata: any) {
    cpdata.username = localStorage.getItem('username');
    var requestURL = this._requestURL.requestURL_admin + 'cpadmin';
    //console.log(cpdata);
    this._http.post(requestURL, cpdata).subscribe((data: any) => {
      if (data.response == 0) this.msg = 'Invalid old password';
      else if (data.response == 1)
        this.msg = 'New & Confirm New password does not match';
      else {
        alert('Password Changed Successfully, Please Login Again');
        localStorage.removeItem('token');
        this._route.navigate(['/login']);
      }
    });
  }
}
