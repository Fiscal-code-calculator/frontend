import { inject } from "@angular/core";
import { CanActivateFn,CanActivateChildFn } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
	const authService:AuthService = inject(AuthService);
  return authService.isAuthenticated();
};

export const authGuardChildren: CanActivateChildFn = (route, state) => {
	const authService:AuthService = inject(AuthService);
  return authService.isAuthenticated();
};