import { Component, inject, OnInit } from "@angular/core";
import { FiscalCodeService } from "../../../services/fiscalcode.service";
import { BackendResponse } from "../../../interfaces/backendresponse.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../../services/auth.service";
import { FiscalCode } from "../../../interfaces/fiscalcode.interface";

@Component({
	selector: "app-history",
	templateUrl: "./history.component.html",
	styleUrl: "./history.component.scss"
})

export class HistoryComponent implements OnInit{
	private fiscalcodeService:FiscalCodeService;
	private authService:AuthService;
	private _fiscalcodes: FiscalCode[];
	public history!: boolean;

	constructor(){
		this.fiscalcodeService = inject(FiscalCodeService);
		this.authService = inject(AuthService);
		this._fiscalcodes = [];
	}

	public get fiscalcodes(): FiscalCode[] {
		return this._fiscalcodes;
	}

	public formatDate(descriptiondate:string): string {
		const date:Date = new Date(descriptiondate);
		const day:number = date.getDate();
		const month:number = date.getMonth();
		const year:number = date.getFullYear();
		return day + "/" + month + "/" + year;
	}

	public ngOnInit(): void {
		this.fiscalcodeService.getAllFiscalCodes().subscribe({
			next: (data:BackendResponse) => {
				console.log(data.message.toString.length < 1 ? this.history = true : "cia");
				const array:FiscalCode[] = <FiscalCode[]>data.message;
				this._fiscalcodes = array;
			},
			error: (error:HttpErrorResponse) => {
				if(error.status === 401 || error.status === 403){
					this.authService.doLogout();
				}else{
					//gestire l'errore http
					console.error(error);
				}
			}
		});
	}
}