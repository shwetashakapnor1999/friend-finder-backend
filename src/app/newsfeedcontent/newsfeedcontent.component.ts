import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-newsfeedcontent',
  templateUrl: './newsfeedcontent.component.html',
  styleUrls: ['./newsfeedcontent.component.css'],
})
export class NewsfeedcontentComponent implements OnInit {
  // msg:any
  responseData: any;
  data: any;
  user_photo: any;
  fileToUpload: any;

  constructor(
    private _http: HttpClient,
    private _route: Router,
    private postData: PostService,
    private _requesturl: RequesturlsService
  ) {}
  requestURL: string = this._requesturl.requestURL_post;

  ngOnInit() {
    let userId = localStorage.getItem('_id');
    this.postData
      .getAllPostByUserId(`${this.requestURL}posts/${userId}`)
      .subscribe((result: any) => {
        console.log('result', result);
        this.data = result.posts;
      });
    this._http
      .post(`${this._requesturl.requestURL_main}getUserProfile`, { userId })
      .subscribe((res: any) => {
        this.user_photo = res.user.user_photo;
        localStorage.setItem('user_photo', this.user_photo);
      });
  }

  handleChangePic(evt: Event) {
    var files: any = (<HTMLInputElement>evt.target).files;
    //files: FileList
    this.fileToUpload = files.item(0);
  }

  onClickSubmit(postDetails: any) {
    let userId: any = localStorage.getItem('_id');
    let { texts } = postDetails;
    if (this.fileToUpload == null) alert('Please Select Image First !');
    else {
      const formData: FormData = new FormData();
      formData.append('photo', this.fileToUpload, this.fileToUpload.name);
      formData.append('userId', userId);
      formData.append('texts', texts);

      this.postData
        .createPost(`${this.requestURL}createPost`, formData)
        .subscribe((response: any) => {
          this.showResponse(response);
          alert('Successfully Posted');
          this.ngOnInit();
        });
      this.fileToUpload = null;
    }
  }

  showResponse(data: any) {
    data.response == 'success'
      ? this._route.navigate(['/newsfeed'])
      : alert('Submission failed');
  }

  onCommentSubmit(commentDetails: any, postId: any) {
    let userId: any = localStorage.getItem('_id');
    let { comment } = commentDetails;
    const body = {
      comment,
      userId: parseInt(userId),
      postId: parseInt(postId),
    };
    console.log(body);
    this.postData
      .addComment(this.requestURL + 'addComment', body)
      .subscribe((data) => {
        this.showResponse(data);
        alert('Successfully Posted');
        this.ngOnInit();
      });
  }
}
