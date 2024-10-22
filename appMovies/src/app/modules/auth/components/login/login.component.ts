import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private authService:AuthService,
    private router:Router,
  ){}
  submit(form:NgForm){
    if (form.valid) {
      console.log(form);
      console.log(form.value);

      localStorage.setItem('LoggedIn', 'true');
      this.router.navigate(['/movies']);
  } else {
      console.log('Form is invalid');
  }
  }
  // use session storage and local storage
}
