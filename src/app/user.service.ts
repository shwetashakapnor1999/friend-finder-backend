import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getRecommendations(requestURL: string, userId: any) {
    const result = this._http.post(requestURL, { userId });
    return result;
  }

  addNewFriend(requestURL: string, body: any) {
    return this._http.post(requestURL, body);
  }

  getAllFriends(requestURL: string, body: any) {
    return this._http.post(requestURL, body);
  }
}
