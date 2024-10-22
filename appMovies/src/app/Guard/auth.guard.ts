import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // if(inject(AuthService).isLoggedIn==true)
  if(localStorage.getItem('LoggedIn')=='true'){
    inject(AuthService)._isLoggedIn=true;
    return true;
  }
else{
  inject(AuthService)._isLoggedIn=false;
  inject(Router).navigate(['/auth/login']);
  return false;
}
};
