import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {


  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  



}
