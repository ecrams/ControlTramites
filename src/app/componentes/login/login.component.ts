import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor() { }
  username: string
  password: string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     console.log('bien')
    }else {
      console.log('mal')
    }
  }

  ngOnInit() {
  }

}
