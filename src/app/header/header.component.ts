import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
  username: any;
  constructor(private _authService: AuthService, private _route: Router) {}

  checkToken() {
    return this._authService.getToken();
  }

  checkTokenAdmin() {
    var res = this._authService.getTokenAdmin();
    if (res) this.username = localStorage.getItem('name');
    return res;
  }

  checkTokenUser() {
    var res = this._authService.getTokenUser();
    if (res) this.username = localStorage.getItem('name');
    return res;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    localStorage.removeItem('info');
    this._route.navigate(['/login']);
  }
}
