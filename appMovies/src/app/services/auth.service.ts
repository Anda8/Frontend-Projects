import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _isLoggedIn:boolean=false;
  constructor() { }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
    if (value) {
      localStorage.setItem('LoggedIn', 'true');
    } else {
      localStorage.removeItem('LoggedIn');
    }
  }
}
