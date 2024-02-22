import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;
  Role: any;
  userValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public authService: AuthenticationService,
    private cookieService: CookieService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
 
  }

  onLogin(): void {
    // const headers = new Headers();
    //     headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //     headers.append('Access-Control-Allow-Methods', 'GET');
    //     headers.append('Access-Control-Allow-Origin', '*');
    console.log(this.authService.loginForm.value)
    if (this.authService.loginForm.invalid) {
      return;
    }
    this.authService.login()
    
  }

  showSuccess(){
    this.toastr.success('Hello World!', 'Toastr fun!')
  }
  
}
