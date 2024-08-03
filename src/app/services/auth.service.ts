import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private router: Router){ }
  authenticated: boolean = false;


  login(email: string, password: string){
    // do the request to login endpoint and check creds

    console.log('Logged In as: ' + email);
    this.authenticated = true;
    this.router.navigate(['/home']);
  }

  register(fullName: string, email: string, password: string){
    // do the request to register endpoint
    
    console.log(`Logged In as: ${fullName} (${email})`);
    this.router.navigate(['/login']);
  }

  
}