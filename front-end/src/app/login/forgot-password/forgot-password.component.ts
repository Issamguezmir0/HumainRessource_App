import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router ,public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.authService.forgotPassword().subscribe(() => {
      this.router.navigate(['/sign-in']);
    }, (err) => {
      console.log(err);
    })
  }  

}
