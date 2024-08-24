import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
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
import { DashboardDefaultMessageComponent } from './components/dashboard-default-message/dashboard-default-message.component';

export function HttpLoaderFactory(http:HttpClient){
	return new TranslateHttpLoader(http);
}

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
		ForgotPasswordComponent,
  DashboardDefaultMessageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		TranslateModule.forRoot({
			loader: {
				provide:TranslateLoader,
				useFactory:HttpLoaderFactory,
				deps:[HttpClient]
			}
		})
	],
	providers: [
		provideHttpClient(withInterceptors([authInterceptor]))
	],
	bootstrap: [MainComponent]
})

export class AppModule{ }
