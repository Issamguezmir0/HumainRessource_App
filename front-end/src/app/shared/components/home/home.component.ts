import { DocumentRhService } from './../../../services/documents-rh/document-rh.service';
import { CongeService } from 'src/app/services/conge/conge.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthenticationService, public congeService: CongeService, public docRhService: DocumentRhService) { }

  ngOnInit(): void {
    this.getMyNonTreated()
    this.getMyNonTreatedDocs()
  }
  
  getMyNonTreated(){
    this.congeService.MyNonTreatedConge().subscribe((result) => {
      this.congeService.listMyNonTreated = result
      console.log(this.congeService.listMyNonTreated)
    }, (error) => {
      console.log(error)
    })
  }

  getMyNonTreatedDocs() {
    this.docRhService.getMyNonTreatedDocuments().subscribe((result) => {
      this.docRhService.MyNonTreatedDocuments = result
    }, (error) => {
      console.log(error)
    })
  }
}

