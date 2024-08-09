import { inject, Injectable } from "@angular/core";
import { HttpRequestService } from "./httprequest.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginData } from "../interfaces/logindata.interface";
import { BackendResponse } from "../interfaces/backendresponse.interface";
import { RegisterData } from "../interfaces/registerdata.interface";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root"
})

export class AuthService{
	private httprequest: HttpRequestService;

	constructor(private router: Router){
		this.httprequest = inject(HttpRequestService);
	}

	public set authenticated(token: string){
		localStorage.setItem("token", token);
		this.router.navigate(["/dashboard"]);
	}

	public isAuthenticated(): boolean {
		if(localStorage.getItem("token") !== null){ return true; }
		else{ return false; }
	}

	public doLogin(form:LoginData):Observable<BackendResponse>{
		return this.httprequest.postRequest(environment.backendUrl + "/users/login",form);
	}

	public doRegister(form:RegisterData):Observable<BackendResponse>{
		return this.httprequest.postRequest(environment.backendUrl + "/users/register",form);
	}

	public doLogout():void{
		localStorage.removeItem("token");
		this.router.navigate(["/"]);
	}
}
