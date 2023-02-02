import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogwelComponent } from './components/logwel/logwel.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:SignupComponent,
    path:"signup"
  },
  {
    component:LogwelComponent,
    path:"logwel"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
