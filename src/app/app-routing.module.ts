import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { authGuard,authGuardChildren } from "./guards/auth.guard";

import { LoginComponent } from "./components/authentication/login/login.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { SettingsComponent } from "./components/profile/settings/settings.component";
import { HistoryComponent } from "./components/profile/history/history.component";

const routes: Routes = [

	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "home", component: CalculatorComponent, canActivate: [authGuard] },

	{ path: "login", component: LoginComponent },
	{ path: "register", component: RegisterComponent },

	{ path: "profile", canActivate: [authGuard],canActivateChild:[authGuardChildren], children: [
		{ path: "", redirectTo: "settings", pathMatch: "full" },
		{ path: "settings", component: SettingsComponent },
		{ path: "history", component: HistoryComponent },
	]},

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{ }
