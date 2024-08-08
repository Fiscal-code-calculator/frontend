import {AfterViewInit, Component, ElementRef, inject, NgZone, Renderer2, ViewChild} from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { Theme } from "../../interfaces/theme.interface";

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss"
})

export class MainComponent implements AfterViewInit{
	constructor(private host: ElementRef<HTMLElement>, private renderer: Renderer2){
		this.themeService = inject(ThemeService);
	}
	@ViewChild("bodyContainer") body!:ElementRef<HTMLDivElement>;
	private themeService: ThemeService;
	lightTheme!: boolean;


	public ngAfterViewInit(): void {
		this.themeService.theme.subscribe({
		  	next: (theme: Theme) => {
				this.lightTheme = theme.name === "light" ? true : false
				// this.body.nativeElement.style.backgroundColor = theme.background;
				this.renderer.setStyle(document.body, 'background', theme.background);
				this.host.nativeElement.style.setProperty('--background', theme.background);
				this.host.nativeElement.style.setProperty('--backgroundAlt', theme.backgroundAlt);
				this.host.nativeElement.style.setProperty('--backgroundAlt2', theme.backgroundAlt2);
				this.host.nativeElement.style.setProperty('--primary', theme.primary);
				this.host.nativeElement.style.setProperty('--textColor', theme.textColor);
			}
		});
	}

	public changeTheme(): void {
		this.themeService[this.lightTheme ? 'setDarkTheme' : 'setLightTheme'](); // bracket notation
	}
	
}