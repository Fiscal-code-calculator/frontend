import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: '../authentication.scss'
})
export class RegisterComponent implements OnInit{
  constructor(private fb: FormBuilder, private authService: AuthService){ }
  registerForm!: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    if(this.registerForm.valid){
      const fullName = this.registerForm.get('email').value;
      const email = this.registerForm.get('email').value;
      const password = this.registerForm.get('password').value;

       this.authService.register(fullName, email, password)
    }
    else{ /* error management to be implemented */ }
  }


}