import { Component, EventEmitter, inject, OnInit, Output } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { BackendResponse } from "../../../interfaces/backendresponse.interface";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "../authentication.scss"
})

export class LoginComponent implements OnInit{
	@Output() switchMode:EventEmitter<void>;
	private authService: AuthService;

	constructor(){
		this.switchMode = new EventEmitter<void>;
		this.authService = inject(AuthService);
	}

	public ngOnInit(): void {}

	public goToRegister():void{
		this.switchMode.emit();
	}

  public loginSubmit(loginForm:NgForm): void {
		if (loginForm.valid === true) {
			const email = loginForm.value.email;
			const password = loginForm.value.password;
			if(email && password){
				this.authService.doLogin({email,password}).subscribe({
					next: (data:BackendResponse) => {
						if(data.check === true){
							this.authService.authenticated = data.message;
						}else{

							//management of error login invalid
							console.error(data.message);

						}
					},
					error: (error:HttpErrorResponse) => {

						//management of error login invalid
						console.error(error);

					}
				});
    	}
  	}else{

			// error management to be implemented for login not possible
			console.error("form not compiled correctly.");

		}
	}
}
