import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, NgZone, Renderer2, ViewChild} from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { Theme } from "../../interfaces/theme.interface";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss"
})

export class MainComponent implements AfterViewInit{
	@ViewChild("bodyContainer") body!:ElementRef<HTMLDivElement>;
	private themeService: ThemeService;
	private _lightTheme: boolean = true;
	private translate: TranslateService;
	public language: string;

	constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef, private host: ElementRef<HTMLElement>){
		this.themeService = inject(ThemeService);
		this.translate = inject(TranslateService);
		this.translate.setDefaultLang("it");
		this.language = this.translate.store.defaultLang;
	}

	public get lightTheme():boolean{
		return this._lightTheme;
	}

	public ngAfterViewInit(): void {
		this.themeService.changeTheme.subscribe({
		  	next: (theme: Theme) => {
				this._lightTheme = (theme.name === "light") ? true : false;
				this.renderer.setStyle(document.body, "background", theme.background);
				this.host.nativeElement.style.setProperty("--background", theme.background);
				this.host.nativeElement.style.setProperty("--backgroundAlt", theme.backgroundAlt);
				this.host.nativeElement.style.setProperty("--backgroundAlt2", theme.backgroundAlt2);
				this.host.nativeElement.style.setProperty("--primary", theme.primary);
				this.host.nativeElement.style.setProperty("--textColor", theme.textColor);
				this.host.nativeElement.style.setProperty("--messageRed", theme.messageRed);
				this.host.nativeElement.style.setProperty("--messageGreen", theme.messageGreen);
				this.cdr.detectChanges();
			}
		});
	}

	public switchLanguage(): void {
		this.language = this.translate.store.currentLang;
		this.translate.use(this.translate.store.currentLang == 'it' ? 'en' : 'it');
	}

	public changeTheme(): void {
		this._lightTheme === true ?
		this.themeService.setDarkTheme() :
		this.themeService.setLightTheme();
	}
}
