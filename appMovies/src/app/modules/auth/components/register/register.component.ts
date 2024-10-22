import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export function passwordsMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (abstractControl: AbstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
          return null;
      }

      if (control!.value !== matchingControl!.value) {
        const error = { confirmedValidator: 'Passwords do not match.' };
        matchingControl!.setErrors(error);
        return error;
      } else {
        matchingControl!.setErrors(null);
        return null;
      }
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  // reactive form
  // registerForm: FormGroup =new FormGroup({
  //   username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._]{3,15}$') ]),
  //   email:new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(4)],),
  //   password2: new FormControl('', [Validators.required, Validators.minLength(4)]),
  // }, { validators: passwordsMatchValidator('password', 'password2')
  // });
  registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._]{3,15}$')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]]
  }, { validators: passwordsMatchValidator('password', 'password2') });

constructor(
  private fb:FormBuilder,
  private router:Router,

){}
  submit() {
    if (this.registerForm.valid) {
        const { username, password } = this.registerForm.value;
      // this.authService.register(username, password);
      console.log(this.registerForm);
      console.log(this.registerForm.value);
      this.router.navigate(['auth/login']);
  } else {
      console.log('Form is invalid');
  }
  }
  get formControl(){
    return this.registerForm.controls;
  }
}
