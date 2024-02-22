import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getConnectedUser()
  }

  getConnectedUser(){
    this.authService.getLoggedInUser().subscribe((user) => {
      const connectedUser = JSON.parse(user)
      this.authService.loggedInUser = connectedUser
    })
  }
}
