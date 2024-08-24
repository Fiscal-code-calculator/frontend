import { Component, EventEmitter, inject, Output } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { BackendResponse } from "../../../interfaces/backendresponse.interface";
import { ThemeService } from "../../../services/theme.service";
import { HomepageMode } from "../../../interfaces/homepagemode.enum";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "../authentication.scss"
})

export class LoginComponent{
	@Output() switchMode: EventEmitter<HomepageMode>;
	private authService: AuthService;
	private themeService: ThemeService;
	public errorMessage: string = "";
	public successMessage: string = "";

	constructor(){
		this.switchMode = new EventEmitter<HomepageMode>();
		this.authService = inject(AuthService);
		this.themeService = inject(ThemeService);
	}

	public get lightTheme(): boolean {
		return this.themeService.theme.name === "light";
	}

	public goToRegister(): void {
		this.switchMode.emit(HomepageMode.REGISTER_MODE);
	}

	public goToForgotPassword(): void {
		this.switchMode.emit(HomepageMode.FORGOT_PASSWORD_MODE);
	}

	public loginSubmit(loginForm:NgForm): void {
		if(loginForm.valid === true){
			const email = loginForm.value.email;
			const password = loginForm.value.password;
			if(email && password){
				this.authService.doLogin({email,password}).subscribe({
					next: (data:BackendResponse) => {
						this.authService.authenticated = <string>data.message;
					},
					error: (error: HttpErrorResponse) => {
						if(error.status == 404){
							this.errorMessage = "Utente non trovato!";
						}
						else if(error.status == 401){
							this.errorMessage = "Credenziali non valide!";
						}
					}
				});
			}
		}else{

			// error management to be implemented for login not possible
			console.error("form not compiled correctly.");

		}
	}
}
