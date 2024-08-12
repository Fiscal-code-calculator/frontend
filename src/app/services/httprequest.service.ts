import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendResponse } from "../interfaces/backendresponse.interface";
import { LoginData } from "../interfaces/logindata.interface";
import { RegisterData } from "../interfaces/registerdata.interface";
import { RestorePasswordData } from "../interfaces/restorepassworddata.interface";
import { NewFiscalCodeData } from "../interfaces/newfiscalcodedata.interface";

@Injectable({
	providedIn:"root"
})

export class HttpRequestService{
	constructor(private http:HttpClient){}

	public getRequest(url:string): Observable<BackendResponse> {
		return this.http.get<BackendResponse>(url);
	}

	public postRequest(url:string,body:LoginData|RegisterData|RestorePasswordData|NewFiscalCodeData):Observable<BackendResponse>{
		return this.http.post<BackendResponse>(url, body);
	}
}
