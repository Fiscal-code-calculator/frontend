import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendResponse } from "../interfaces/backendresponse.interface";
import { LoginData } from "../interfaces/logindata.interface";
import { RegisterData } from "../interfaces/registerdata.interface";

@Injectable({
	providedIn:"root"
})

export class HttpRequestService {
	constructor(private http: HttpClient){ }

	public getRequest(url: string): Observable<BackendResponse> {
		return this.http.get<BackendResponse>(url);
	}

	public postRequest(url: string, body: LoginData | RegisterData): Observable<BackendResponse> {
		return this.http.post<BackendResponse>(url, body);
	}
}
