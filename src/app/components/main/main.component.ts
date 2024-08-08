import {AfterViewInit, Component, ElementRef, inject, NgZone, Renderer2, ViewChild} from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { Theme } from "../../interfaces/theme.interface";

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss"
})

export class MainComponent implements AfterViewInit{
	@ViewChild("bodyContainer") body!:ElementRef<HTMLDivElement>;
	private themeService: ThemeService;
	private _lightTheme: boolean;

	constructor(private host: ElementRef<HTMLElement>, private renderer: Renderer2){
		this.themeService = inject(ThemeService);
		this._lightTheme = true;
	}

	public get lightTheme():boolean{
		return this._lightTheme;
	}

	public ngAfterViewInit(): void {
		this.themeService.changeTheme.subscribe({
		  	next: (theme: Theme) => {
				this._lightTheme = (theme.name === "light") ? true : false ;
				this.renderer.setStyle(document.body, "background", theme.background);
				this.host.nativeElement.style.setProperty("--background", theme.background);
				this.host.nativeElement.style.setProperty("--backgroundAlt", theme.backgroundAlt);
				this.host.nativeElement.style.setProperty("--backgroundAlt2", theme.backgroundAlt2);
				this.host.nativeElement.style.setProperty("--primary", theme.primary);
				this.host.nativeElement.style.setProperty("--textColor", theme.textColor);
			}
		});
	}

	public changeTheme(): void {
		if(this._lightTheme === true){
			this.themeService.setDarkTheme();
		}else{
			this.themeService.setLightTheme();
		}
	}
}
