import { Component } from "@angular/core";
import { HomepageMode } from "../../interfaces/homepagemode.enum";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrl: "./homepage.component.scss"
})

export class HomepageComponent{
	private _pageToShow:number;

	constructor(){
		this._pageToShow = 0;
	}

	public get pageToShow():number{
		return this._pageToShow;
	}

	public switchAuthentication(modeChosen:HomepageMode):void{
		if(modeChosen === HomepageMode.LOGIN_MODE){
			this._pageToShow = 0;
		}else if(modeChosen === HomepageMode.REGISTER_MODE){
			this._pageToShow = 1;
		}else if(modeChosen === HomepageMode.FORGOT_PASSWORD_MODE){
			this._pageToShow = 2;
		}
	}
}
