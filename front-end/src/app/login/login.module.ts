import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    SignInComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRoutingModule
  ],
  exports: [
    SignInComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ]
})
export class LoginModule { }
