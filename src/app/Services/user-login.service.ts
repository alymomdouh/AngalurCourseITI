import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
private isLoggedSubject: BehaviorSubject<boolean>;
// use BehaviorSubject becauuse it take intial value
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
  }

  login(usrName:string, pwd:string):boolean
  {
    // Call Login API (usrName, pwd), if correct return Access Token
    let userToken:string="0600f938-7c7f-4bef-a569-3e15dcc43140";
    localStorage.setItem('userToken', userToken);
    this.isLoggedSubject.next(true);
    return true;
  }
  logout()
  {
    // Call Logout API
    localStorage.removeItem('userToken');
    this.isLoggedSubject.next(false);
  }

  loginStatus():boolean
  {
    if(localStorage.getItem('userToken'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  loginStatusSubject(): Observable<boolean> {
    // here return Observable not BehaviorSubject to make user not make next 
    return this.isLoggedSubject.asObservable();
  }
}
