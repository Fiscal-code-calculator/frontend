import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ThemeService } from '../../../services/theme.service';
import { BackendResponse } from '../../../interfaces/backendresponse.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss', '../authentication.scss']
})
export class ForgotPasswordComponent{
  private authService: AuthService;
	private themeService: ThemeService;

  constructor(private location: Location){
		this.authService = inject(AuthService);
		this.themeService = inject(ThemeService);
	}

  public goBack(): void { this.location.back(); }
  public get lightTheme(): boolean {
		return this.themeService.theme.name === "light";
	}

  // draft
  public emailSubmit(forgotPasswordForm: NgForm): void {
		if(forgotPasswordForm.valid === true){
			const email = forgotPasswordForm.value.email;
			if(email){
				this.authService.sendEmail(email).subscribe({
					next: (data: BackendResponse) => {
						if(data.check === true){
							this.authService.authenticated = data.message;
						}
						else{
              console.error(data.message); // management of error login invalid
						}
					},
					error: (error: HttpErrorResponse) => {
						console.error(error); // management of error login invalid
					}
				});
			}
		}
		else{
			console.error("form not compiled correctly."); // error management to be implemented for login not possible
		}
	}

}