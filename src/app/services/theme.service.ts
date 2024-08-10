import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Theme } from "../interfaces/theme.interface";

@Injectable({
	providedIn: "root"
})

export class ThemeService{
	private lightTheme: Theme;
	private darkTheme: Theme;
	private _theme: BehaviorSubject<Theme>;
	private observable: Observable<Theme>;
	private browserTheme: boolean = true; // true: lightTheme, false: darkTheme

	constructor(){
		this.lightTheme = {
			name: "light",
			background: "#F1F1F1",
			backgroundAlt: "#dedede",
			backgroundAlt2: "#cccccc",
			primary: "#E63946",
			textColor: "#010101",
			messageRed: "#FD5D2B",
			messageGreen: "#3CAC14"
		}
		this.darkTheme = {
			name: "dark",
			background: "#010101",
			backgroundAlt: "#201F1F",
			backgroundAlt2: "#363636",
			primary: "#E63946",
			textColor: "#F1F1F1",
			messageRed: "#FD5D2B",
			messageGreen: "#3CAC14"
		}
		this.browserTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
		this._theme = new BehaviorSubject<Theme>(this.browserTheme ? this.lightTheme : this.darkTheme);
		this.observable = this._theme.asObservable();
	}

	public get changeTheme(): Observable<Theme>{
		return this.observable;
	}

	public get theme(): Theme{
		return this._theme.value;
	}

	public setLightTheme(): void{
		this._theme.next(this.lightTheme);
	}

	public setDarkTheme(): void{
		this._theme.next(this.darkTheme);
	}
}
