import { Component, EventEmitter, inject, OnInit, Output } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { ThemeService } from "../../services/theme.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss"
})

export class DashboardComponent{
	@Output() switchMode: EventEmitter<void>;
	private authService: AuthService;
	private themeService: ThemeService;
	public sidebarState: boolean = true;

	constructor(){
		this.switchMode = new EventEmitter<void>;
		this.authService = inject(AuthService);
		this.themeService = inject(ThemeService);
	}

	public get lightTheme(): boolean {
		return this.themeService.theme.name === "light";
	}

	public toggleSidebar(){ this.sidebarState = !this.sidebarState }
	public doLogout(): void { this.authService.doLogout(); }
}