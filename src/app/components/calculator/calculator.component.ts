import { Component, OnInit } from "@angular/core";
import { HttpRequestService } from "../../services/httprequest.service";
import { environment } from "../../../environments/environment";
import { BackendResponse } from "../../interfaces/backendresponse.interface";
import { RegisterData } from "../../interfaces/registerdata.interface";

@Component({
	selector: "app-calculator",
	templateUrl: "./calculator.component.html",
	styleUrl: "./calculator.component.scss"
})

export class CalculatorComponent implements OnInit{
	constructor(private requestService: HttpRequestService){ }
	private userData!: RegisterData;

	ngOnInit(): void {
		this.requestService.postRequest(environment.backendUrl + '/fiscalcodes', this.userData).subscribe({
			next: (response: BackendResponse) => {
				console.debug(response);
			},
			error: (err) => { },
			complete: () => { }
		})
	}
}