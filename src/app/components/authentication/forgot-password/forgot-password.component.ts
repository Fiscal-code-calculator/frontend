import { Component, EventEmitter, inject, Output } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { ThemeService } from "../../../services/theme.service";
import { BackendResponse } from "../../../interfaces/backendresponse.interface";
import { HomepageMode } from "../../../interfaces/homepagemode.enum";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss", "../authentication.scss"]
})
export class ForgotPasswordComponent{
	@Output() switchMode:EventEmitter<HomepageMode>;
  private authService: AuthService;
	private themeService: ThemeService;

  constructor(){
		this.switchMode = new EventEmitter<HomepageMode>();
		this.authService = inject(AuthService);
		this.themeService = inject(ThemeService);
	}

	public get lightTheme(): boolean {
		return this.themeService.theme.name === "light";
	}

  public goToLogin(): void {
		this.switchMode.emit(HomepageMode.LOGIN_MODE)
	}

  public emailSubmit(forgotPasswordForm: NgForm): void {
		if(forgotPasswordForm.valid === true){
			const email:string = forgotPasswordForm.value.email;
			if(email){
				this.authService.sendRequestRestorePassword({email}).subscribe({
					next: (data: BackendResponse) => {
						if(data.check === true){

							//cosa dobbiamo fare dopo che viene inviata la richiesta dell'email?
							console.log(data.message);

						}else{

							// management of error recovery password invalid
              console.error(data.message);

						}
					},
					error: (error: HttpErrorResponse) => {

						// management of error recovery password invalid
						console.error(error);

					}
				});
			}
		}else{

			// error management to be implemented for recovery password not possible
			console.error("form not compiled correctly.");

		}
	}
}
