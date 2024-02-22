import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-client';

  constructor (private authService: AuthenticationService, public router: Router) {}

  ngOnInit(): void {
    
  }
}
