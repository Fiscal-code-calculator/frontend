import { Component } from "@angular/core";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrl: "./homepage.component.scss"
})

export class HomepageComponent {
	private _loginMode:boolean;

	constructor(){
		this._loginMode = true;
	}

	public get loginMode():boolean{
		return this._loginMode;
	}

	public switchLoginRegister():void{
		if(this._loginMode === true){
			this._loginMode = false;
		}else{
			this._loginMode = true;
		}
	}
}
