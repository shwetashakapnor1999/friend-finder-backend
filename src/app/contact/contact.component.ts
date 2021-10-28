import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  requestURL:string="http://localhost:3000/webapi/usercontact"
  // msg:any
  responseData:any
  constructor(private _http:HttpClient,private _route:Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(userdetails:any)
  {
    // console.log(userdetails)
    this._http.post(this.requestURL,userdetails).subscribe((data)=>{
      
      this.showResponse(data)
      alert('Successfully submitted')
                                 
    })

  }

  showResponse(data:any)
  {
    data.response=='success' ? this._route.navigate(['']) : alert('Submission failed');   
  }
  


}
