import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { authInterceptor } from "./interceptors/auth.interceptor";

import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { SettingsComponent } from "./components/profile/settings/settings.component";
import { HistoryComponent } from "./components/profile/history/history.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ResetPasswordComponent } from "./components/authentication/reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./components/authentication/forgot-password/forgot-password.component";

@NgModule({
	declarations: [
		MainComponent,
		LoginComponent,
		RegisterComponent,
		CalculatorComponent,
		SettingsComponent,
		HistoryComponent,
		HomepageComponent,
		DashboardComponent,
		ResetPasswordComponent,
		ForgotPasswordComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		RouterModule
	],
	providers: [
		provideHttpClient(withInterceptors([authInterceptor]))
	],
	bootstrap: [MainComponent]
})

export class AppModule{ }
