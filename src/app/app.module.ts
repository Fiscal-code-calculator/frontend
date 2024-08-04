import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { SettingsComponent } from "./components/profile/settings/settings.component";
import { HistoryComponent } from "./components/profile/history/history.component";

@NgModule({
	declarations: [
		MainComponent,
		LoginComponent,
		RegisterComponent,
		CalculatorComponent,
		SettingsComponent,
		HistoryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [MainComponent]
})

export class AppModule{ }
