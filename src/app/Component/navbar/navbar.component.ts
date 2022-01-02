import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isuserLoggedin:boolean=false;
  constructor(private isuserLoggedSubjectservice:UserLoginService) { }

  ngOnInit(): void {
    this.isuserLoggedSubjectservice.loginStatusSubject().subscribe({
      next: (loginstatus)=>{this.isuserLoggedin=loginstatus;}
    })
  }

}
