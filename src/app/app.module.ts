import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { NgoLoginFormComponent } from './ngo-login-form/ngo-login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginFormComponent,
    NgoLoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
