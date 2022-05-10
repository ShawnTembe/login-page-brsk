import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/SignIn/SignIn.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'', component: SignInComponent},
  {path:'signin', component: SignInComponent},
  {path: 'forgot-password',component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}