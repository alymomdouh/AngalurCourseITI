import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
}) 
export class LoginComponent implements OnInit {
isUsrLogged:boolean=false;
  loginform !: FormGroup  ;
  constructor(private userloginuservices:UserLoginService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.isUsrLogged=this.userloginuservices.loginStatus();// first time before press any button
    this.loginform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });
  }
login()
  {
    this.userloginuservices.login("aly", "123");
    this.isUsrLogged=this.userloginuservices.loginStatus();
  }

  logout()
  {
    this.userloginuservices.logout();
    this.isUsrLogged=this.userloginuservices.loginStatus();
  }
}
