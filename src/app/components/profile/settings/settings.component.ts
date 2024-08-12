import { Component, inject, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../../services/auth.service";
import { BackendResponse } from "../../../interfaces/backendresponse.interface";
import { User } from "../../../interfaces/user.interface";

@Component({
	selector: "app-settings",
	templateUrl: "./settings.component.html",
	styleUrl: "./settings.component.scss"
})

export class SettingsComponent implements OnInit{
	private authService:AuthService;
	private _user:User;

	constructor(){
		this.authService = inject(AuthService);
		this._user = {
			user_id:0,
			name:"",
			surname:"",
			email:""
		}
	}

	public get user():User{
		return this._user;
	}

	public ngOnInit():void{
		this.authService.getProfile().subscribe({
			next: (response:BackendResponse) => {
				const data:User = <User>response.message;
				this._user = data;
			},
			error: (error:HttpErrorResponse) => {
				if(error.status === 401 || error.status === 403){
					this.authService.doLogout();
				}else{

					//gestire l'errore qui
					console.error(error);

				}
			}
		});
	}
}
