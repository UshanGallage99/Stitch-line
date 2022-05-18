import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/share/login/login.component';
import { SignUpComponent } from './components/share/sign-up/sign-up.component'; 
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './components/share/profile/profile.component';
import { AdminProfileComponent } from './components/share/admin-profile/admin-profile.component';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    AdminProfileComponent, 
  ],
  imports: [ 
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
