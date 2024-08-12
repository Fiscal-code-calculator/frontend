import { inject, Injectable } from "@angular/core";
import { HttpRequestService } from "./httprequest.service";
import { NewFiscalCodeData } from "../interfaces/newfiscalcodedata.interface";
import { Observable } from "rxjs";
import { BackendResponse } from "../interfaces/backendresponse.interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class FiscalCodeService{
	private httprequest:HttpRequestService;

  constructor(){
		this.httprequest = inject(HttpRequestService);
	}

	public createFiscalCode(form:NewFiscalCodeData):Observable<BackendResponse>{
		return this.httprequest.postRequest(environment.backendUrl + "/fiscalcodes",form);
	}

	public getAllFiscalCodes():Observable<BackendResponse>{
		return this.httprequest.getRequest(environment.backendUrl + "/fiscalcodes");
	}
}
