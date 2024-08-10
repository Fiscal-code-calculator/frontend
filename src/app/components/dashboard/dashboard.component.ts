import { Component, EventEmitter, HostListener, inject, OnInit, Output } from "@angular/core";
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
	public name = 'John'; // example name, to implement a method to retrieve user datas

	constructor(){
		this.switchMode = new EventEmitter<void>;
		this.authService = inject(AuthService);
		this.themeService = inject(ThemeService);
	}

	public get lightTheme(): boolean {
		return this.themeService.theme.name === "light";
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event): void {
		this.toggleSidebar('resize');
	}

	public toggleSidebar(func?: string){
		if(func === 'resize'){
			if(window.innerWidth <= 700){ this.sidebarState = false; }
			else{ this.sidebarState = true; }
		}
		else{
			this.sidebarState = !this.sidebarState;
		}
	}
	public doLogout(): void { this.authService.doLogout(); }
}