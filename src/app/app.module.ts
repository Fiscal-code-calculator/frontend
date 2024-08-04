import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SettingsComponent } from './components/profile/settings/settings.component';
import { HistoryComponent } from './components/profile/history/history.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    RegisterComponent,
    CalculatorComponent,
    SettingsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})

export class AppModule{ }
