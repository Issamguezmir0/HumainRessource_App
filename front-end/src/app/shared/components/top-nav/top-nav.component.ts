import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
