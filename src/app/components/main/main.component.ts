import {AfterViewInit, Component, ElementRef, inject, ViewChild} from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { Theme } from "../../interfaces/theme.interface";

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss"
})

export class MainComponent implements AfterViewInit{
	@ViewChild("bodyContainer") body!:ElementRef<HTMLDivElement>;
	private themeService:ThemeService;

	constructor(){
		this.themeService = inject(ThemeService);
	}

	public ngAfterViewInit(): void {
		this.themeService.theme.subscribe({
			next: (theme:Theme) => {
				this.body.nativeElement.style.backgroundColor = theme.background;
			}
		})
	}

	public setLightTheme():void{
		this.themeService.setLightTheme();
	}

	public setDarkTheme():void{
		this.themeService.setDarkTheme();
	}
}
