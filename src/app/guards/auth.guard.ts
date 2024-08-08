import { inject } from "@angular/core";
import { CanActivateFn,CanActivateChildFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const authGuardParent: CanActivateFn = (route, state) => {
	const authService: AuthService = inject(AuthService);
	const router:Router = inject(Router);
	if(authService.isAuthenticated() === false){
		return router.parseUrl("/");
	}
	return true;
};

export const authGuardChildren: CanActivateChildFn = (route, state) => {
	const authService: AuthService = inject(AuthService);
	const router:Router = inject(Router);
	if(authService.isAuthenticated() === false){
		return router.parseUrl("/");
	}
	return true;
};
