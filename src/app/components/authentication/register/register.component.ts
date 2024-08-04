import { Component, inject, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { BackendResponse } from "../../../interfaces/BackendResponse.interface";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrl: "../authentication.scss"
})
export class RegisterComponent implements OnInit{
	private authService: AuthService;

	constructor(){
		this.authService = inject(AuthService);
	}

	public ngOnInit(): void {}

	public registerSubmit(registerForm:NgForm): void {
		if(registerForm.valid === true){
			const fullname:string = registerForm.value.fullname;
			const email:string = registerForm.value.email;
			const password:string = registerForm.value.password;
			const repeatpassword:string = registerForm.value.repeatpassword;
			if(fullname && email && password && repeatpassword && password === repeatpassword){
				this.authService.doRegister({fullname,email,password,repeatpassword}).subscribe({
					next: (data:BackendResponse) => {
						if(data.check === true){

							//registrazione andata a buon fine
							console.log(data.message);

						}else{

							//registrazione non effettuata, gestire l'errore
							console.error(data.message);

						}

					},
					error: (error:HttpErrorResponse) => {

						//registrazione non effettuata, gestire l'errore
						console.error(error);

					}
				});
			}
		}else{

			//error management to be implemented for registration not possible

		}
  }


}
