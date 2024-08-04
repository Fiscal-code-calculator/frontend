import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  constructor(){ }

  lightTheme: any = {
    background: "#F1F1F1",
    backgroundAlt: "#181818",
  }

  darkTheme: any = {
    background: "#010101",
    backgroundAlt: "#181818",
    primary: "#E63946"
  }

}