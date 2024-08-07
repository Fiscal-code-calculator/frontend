import { HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const authService:AuthService = inject(AuthService);
	if(authService.isAuthenticated() === true){
		const token:string = <string>localStorage.getItem("token");
		const authReq:HttpRequest<any> = req.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`
			}
		});
		return next(authReq);
	}else{
		return next(req);
	}
};
