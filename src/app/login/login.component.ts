import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route :Router) { }

  ngOnInit() {
  }
  login(username,password)
  {
    if(username=='abhishek' && password=='abhishek')
    {
       this.route.navigateByUrl('\emp')
    }
    else
    {

    }
  }

}
