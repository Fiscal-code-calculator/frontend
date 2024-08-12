import { Component, EventEmitter, HostListener, inject, OnInit, Output } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { ThemeService } from "../../services/theme.service";
import { BackendResponse } from "../../interfaces/backendresponse.interface";
import { User } from "../../interfaces/user.interface";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss"
})

export class DashboardComponent implements OnInit{
	@Output() switchMode: EventEmitter<void>;
	private authService: AuthService;
	private themeService: ThemeService;
	public sidebarState: boolean;
	public name:string;

	constructor(){
		this.switchMode = new EventEmitter<void>;
		this.authService = inject(AuthService);
		this.themeService = inject(ThemeService);
		this.sidebarState = true;
		this.name = "";
	}

	public get lightTheme(): boolean {
		return this.themeService.theme.name === "light";
	}

	public ngOnInit(): void {
		this.authService.getProfile().subscribe({
			next: (data:BackendResponse) => {
				this.name = (<User>data.message).name;
			},
			error: (error:HttpErrorResponse) => {
				if(error.status === 401 || error.status === 403){
					this.authService.doLogout();
				}else{

					//gestire l'errore qui
					console.error(error);

				}
			}
		});
	}

	@HostListener("window:resize", ["$event"])
	public onResize(event:Event): void {
		this.toggleSidebar("resize");
	}

	public toggleSidebar(func?: string){
		if(func === "resize"){
			if(window.innerWidth <= 700){ this.sidebarState = false; }
			else{ this.sidebarState = true; }
		}
		else{
			this.sidebarState = !this.sidebarState;
		}
	}
	public doLogout(): void {
		this.authService.doLogout();
	}
}
