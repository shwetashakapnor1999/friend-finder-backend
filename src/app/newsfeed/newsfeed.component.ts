import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RequesturlsService } from '../requesturls.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit {
  username: any;
  data: any;
  user_photo: any;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _route: Router,
    private _requesturl: RequesturlsService,
    private _http: HttpClient
  ) {}

  private requestURL: string = this._requesturl.requestURL_main;
  private fileToUpload: any = null;

  ngOnInit(): void {
    let userId = localStorage.getItem('_id');
    this._userService
      .getRecommendations(`${this.requestURL}getRecommendations`, userId)
      .subscribe((data: any) => {
        console.log('data', data);
        this.data = data.result;
      });

    this._http
      .post(`${this.requestURL}getUserProfile`, { userId })
      .subscribe((res: any) => {
        this.user_photo = res.user.user_photo;
        console.log(this.user_photo);
        localStorage.setItem('user_photo', this.user_photo);
      });
  }

  handleChangePic(evt: Event) {
    var files: any = (<HTMLInputElement>evt.target).files;
    //files: FileList
    this.fileToUpload = files.item(0);
  }

  upload() {
    //alert(pid)
    let userId = localStorage.getItem('_id');
    if (this.fileToUpload == null) alert('Please Select Image First !');
    else {
      const formData: FormData = new FormData();
      formData.append('photo', this.fileToUpload, this.fileToUpload.name);
      formData.append('userId', userId);

      this._http
        .post(`${this.requestURL}update-profile-image`, formData)
        .subscribe((response: any) => {
          this.ngOnInit();
        });
      this.fileToUpload = null;
    }
  }

  checkTokenUser() {
    var res = this._authService.getTokenUser();
    if (res) {
      this.username = localStorage.getItem('name');
    }
    return res;
  }

  addNewFriend(friendId: any) {
    let userId = localStorage.getItem('_id');
    let body = { friendId, userId };
    console.log(body);
    this._userService
      .addNewFriend(`${this.requestURL}addNewFriend`, body)
      .subscribe((data) => {
        console.log(data);
        alert(`Successfully Added new Friend.`);
        this.ngOnInit();
      });
  }
}
