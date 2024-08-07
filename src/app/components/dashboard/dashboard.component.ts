import { Component, inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss"
})

export class DashboardComponent {
	private authService:AuthService;

	constructor(){
		this.authService = inject(AuthService);
	}

	public doLogout():void{
		this.authService.doLogout();
	}
}
