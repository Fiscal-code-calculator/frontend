import { Component, inject, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { FiscalCodeService } from "../../services/fiscalcode.service";
import { BackendResponse } from "../../interfaces/backendresponse.interface";
import { Router } from "@angular/router";

@Component({
	selector: "app-calculator",
	templateUrl: "./calculator.component.html",
	styleUrl: "./calculator.component.scss"
})

export class CalculatorComponent implements OnInit{
	private fiscalcodeService: FiscalCodeService;
	private authService:AuthService;

	constructor(private router: Router){
		this.fiscalcodeService = inject(FiscalCodeService);
		this.authService = inject(AuthService);
	}

	public ngOnInit(): void {}

	public createFiscalCode(fiscalCodeForm:NgForm):void{
		this.fiscalcodeService.createFiscalCode(fiscalCodeForm.value).subscribe({
			next: (response: BackendResponse) => {

				//response of new fiscalcode
				console.log(response);
				this.router.navigate(["/dashboard/profile/history"]);
			},
			error: (error:HttpErrorResponse) => {
				if(error.status === 401 || error.status === 403){
					this.authService.doLogout();
				}else{

					//management of the error received from the server
					console.error(error);

				}
			}
		})
	}
}
