import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  requestURL: string = "http://localhost:3000/webapi/usersignup"
  responseData: any

  constructor(private _http: HttpClient, private _route: Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(userdetails:any)
  {
    // console.log(userdetails)
    
    this._http.post(this.requestURL,userdetails).subscribe((data)=>{
      this.showResponse(data)                            
    })

  }

  showResponse(data:any)
  {
    data.response=='success' ? this._route.navigate(['/login']) : alert('Registration failed');   
  }


}
