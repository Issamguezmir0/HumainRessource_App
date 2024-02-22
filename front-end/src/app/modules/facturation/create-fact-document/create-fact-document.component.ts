import { FactDocumentService } from './../../../services/fact-document/fact-document.service';
import { ClientService } from './../../../services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-create-fact-document',
  templateUrl: './create-fact-document.component.html',
  styleUrls: ['./create-fact-document.component.scss']
})
export class CreateFactDocumentComponent implements OnInit {

  all_clients = [""]
  clicked = false
  myTvaDefaultValue: number = 0;
  client: string = "Takolor"

  constructor(
    private router: Router, 
    public clientService: ClientService, 
    private modalService: NgbModal, 
    public factDocService: FactDocumentService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getClientsName()
    this.factDocService.formFirst.reset()
    this.factDocService.articles = []
    this.factDocService.formAddArticle.reset()
    
  }

  /** client select input - from server */
  getClientsName (){
    this.clientService.get_all_clients().subscribe((result) => {
      const allClients = result.map((res) => res.client_name)
      this.all_clients = allClients
    }, (error) => {
      console.log(error)
    })
  }

  toggle(){
    this.clicked =! this.clicked
  }

  cancelButton() {
    this.clicked =! this.clicked
    this.factDocService.formFirst.reset()
    this.factDocService.articles = []
    this.factDocService.formAddArticle.reset()
  }

  /** add one row */
  onClickAdd(targetModal: any){
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  addArticle() {

    let oneArticle = this.factDocService.formAddArticle.value
    oneArticle = {...oneArticle, total: Math.round(((oneArticle.prix*oneArticle.tva)/100 + parseFloat(oneArticle.prix))*100)/100, ref: UUID.UUID()}
    this.factDocService.articles = [...this.factDocService.articles, oneArticle]
    this.modalService.dismissAll()
    this.factDocService.formAddArticle.reset();
  }

  /** update one row - 3 steps */
  InitiliazeFormForEditingRow (article : any){
    this.factDocService.formAddArticle.patchValue({
      ref: article.ref,
      prestation : article.prestation,
      description : article.description,
      prix : article.prix,
      tva: article.tva
    })
  }

  onEditArticle (targetModal: any, article : any) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.InitiliazeFormForEditingRow(article)
  }

  updateOneArticle (ref : any) {
    this.factDocService.articles.forEach((element: any, index: any, theArray: any) => {
      if(element.ref == ref) {
        let updatedArticle = this.factDocService.formAddArticle.value
        updatedArticle = {...updatedArticle, total: Math.round(((updatedArticle.prix*updatedArticle.tva)/100 + parseFloat(updatedArticle.prix))*100)/100}
        theArray[index]= updatedArticle
      }
    })
    this.modalService.dismissAll()
  }

  /** delete one row */
  deleteRow(ref : any){
    const index = this.factDocService.articles.indexOf(ref);
    this.factDocService.articles.splice(index, 1);
  }

  


}
