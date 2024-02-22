import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentRhService } from 'src/app/services/documents-rh/document-rh.service';


@Component({
  selector: 'app-ask-for-document',
  templateUrl: './ask-for-document.component.html',
  styleUrls: ['./ask-for-document.component.scss']
})
export class AskForDocumentComponent implements OnInit {

  selectedValue: string = 'Attestation';

  constructor(public DocumentRhService: DocumentRhService, private router: Router) { }

  ngOnInit(): void {
  }

  AskForDocument() {
    this.DocumentRhService.askForDocument().subscribe(() => {
      window.location.reload()
    }, (error) => {
      console.log(error)
    })
  }

  

}
