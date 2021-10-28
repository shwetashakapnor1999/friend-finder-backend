import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient, private _route: Router) {}

  getAllPostByUserId(requestURL: string) {
    const result = this._http.get(requestURL);
    return result;
  }

  createPost(requestURL: string, postDetails: any) {
    return this._http.post(requestURL, postDetails);
  }

  addComment(requestURL: string, comment: any) {
    return this._http.post(requestURL, comment);
  }
}
