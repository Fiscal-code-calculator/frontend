import { Component } from "@angular/core";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrl: "./homepage.component.scss"
})

export class HomepageComponent{
	private _component: number = 0;

	constructor(){ }

	public get pageToShow(): number {
		return this._component;
	}

	public switchAuthentication(page: any): void {
		console.log(page);
		
		if(page === 0){ this._component = 0; }
		else if(page === 1){ this._component = 1; }
		else{ this._component = 2; }
	}
}
