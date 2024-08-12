import { Component, EventEmitter, inject, Output } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { BackendResponse } from "../../../interfaces/backendresponse.interface";
import { ThemeService } from "../../../services/theme.service";
import { HomepageMode } from "../../../interfaces/homepagemode.enum";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrl: "../authentication.scss"
})

export class RegisterComponent{
	@Output() switchMode:EventEmitter<HomepageMode>;
	private authService: AuthService;
	private themeService: ThemeService;

	constructor(){
		this.switchMode = new EventEmitter<HomepageMode>();
		this.authService = inject(AuthService);
		this.themeService = inject(ThemeService);
	}

	public goToLogin(): void {
		this.switchMode.emit(HomepageMode.LOGIN_MODE);
	}

	public get lightTheme(): boolean {
		return this.themeService.theme.name === "light";
	}

	public registerSubmit(registerForm: NgForm): void {
		if(registerForm.valid === true){
			const name: string = registerForm.value.name;
			const surname: string = registerForm.value.surname;
			const email: string = registerForm.value.email;
			const password: string = registerForm.value.password;
			const repeatpassword: string = registerForm.value.repeatpassword;

			if(name && surname && email && password && repeatpassword && password === repeatpassword){
				this.authService.doRegister({ name, surname, email, password, repeatpassword }).subscribe({
					next: (data:BackendResponse) => {
						if(data.check === true){

							// registrazione andata a buon fine (stampare il messaggio informativo)
							console.log(data.message);

							registerForm.resetForm();
						}else{

							// registrazione non effettuata, gestire l'errore
							console.error(data.message);

						}

					},
					error: (error:HttpErrorResponse) => {

						// registrazione non effettuata, gestire l'errore
						console.error(error);

					}
				});
			}
		}else{

			// error management to be implemented for registration not possible
			console.error("form not compiled correctly.");

		}
	}
}
