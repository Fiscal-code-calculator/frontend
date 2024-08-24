import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { authGuardParent,authGuardChildren } from "./guards/auth.guard";

import { CalculatorComponent } from "./components/calculator/calculator.component";
import { SettingsComponent } from "./components/profile/settings/settings.component";
import { HistoryComponent } from "./components/profile/history/history.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ResetPasswordComponent } from "./components/authentication/reset-password/reset-password.component";
import { DashboardDefaultMessageComponent } from "./components/dashboard-default-message/dashboard-default-message.component";

const routes: Routes = [
	{ path: "", redirectTo: "homepage", pathMatch: "full" },
	{ path: "homepage", component: HomepageComponent },
	{ path: "reset-password/:token", component: ResetPasswordComponent },

	{ path: "dashboard", component: DashboardComponent, canActivate: [authGuardParent], canActivateChild: [authGuardChildren], children: [
		{ path: "", redirectTo: "home", pathMatch: "full" },
		{ path: "home", component: DashboardDefaultMessageComponent },
		{ path: "calculator", component: CalculatorComponent },
		{ path: "profile", canActivateChild: [authGuardChildren], children: [
			{ path: "", redirectTo: "settings", pathMatch: "full" },
			{ path: "settings", component: SettingsComponent },
			{ path: "history", component: HistoryComponent },
		]},
	]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{ }
