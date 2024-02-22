import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router ,public authService: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  resetPassword() {
    const token = this.route.snapshot.paramMap.get("token")
    console.log(token)
    this.authService.formEditPassword.value.resetLink = token
    this.authService.resetPassword().subscribe((result) => {
      this.router.navigate(['/sign-in']);
    }, (error) => {
      console.log("this is the error",error);
    })
  }
}
