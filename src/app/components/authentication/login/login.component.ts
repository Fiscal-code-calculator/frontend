import { Component, inject, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { BackendResponse } from "../../../interfaces/BackendResponse.interface";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "../authentication.scss"
})

export class LoginComponent implements OnInit{
	private authService: AuthService;

	constructor(private router:Router){
		this.authService = inject(AuthService);
	}

	public ngOnInit(): void {}

  public loginSubmit(loginForm:NgForm): void {
		if (loginForm.valid === true) {
			const email = loginForm.value.email;
			const password = loginForm.value.password;
			if(email && password){
				this.authService.doLogin({email,password}).subscribe({
					next: (data:BackendResponse) => {
						if(data.check === true){

							//estrarre il token che arriva dal server
							localStorage.setItem("token","aaaaaaa");
							this.router.navigate(["/home"]);


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
    	}else{

				// error management to be implemented for login not possible

			}
  	}
	}
}
