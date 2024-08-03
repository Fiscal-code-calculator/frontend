import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from "./components/authentication/login/login.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CalculatorComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{ }