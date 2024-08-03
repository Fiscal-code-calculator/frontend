import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService){ }

  canActivate(route: any, state: any): boolean {
    if(this.authService.authenticated){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}