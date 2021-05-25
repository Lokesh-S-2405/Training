import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgoLoginFormComponent } from './ngo-login-form/ngo-login-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';

const routes: Routes = [
  {path:'user/signUp',component:UserLoginFormComponent},
  {path:'ngo/signUp',component:NgoLoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
