import { document_rh } from './../../../shared/models/document-rh';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DocumentRhService } from 'src/app/services/documents-rh/document-rh.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultation-document',
  templateUrl: './consultation-document.component.html',
  styleUrls: ['./consultation-document.component.scss']
})
export class ConsultationDocumentComponent implements OnInit {

  

  constructor(private router: Router, public DocumentRhService: DocumentRhService, private modalService: NgbModal) { }

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        lengthMenu: "Affichage de _MENU_ enregistrements",
        info: "Affichage de _START_ à _END_ de _TOTAL_ enregistrements",
        search: "Chercher:",
        paginate: {
          first: "Premier",
          last: "Dernier",
          next: "Suivant",
          previous: "Précédent",
        },
        emptyTable: "Aucune donnée disponible!",
        zeroRecords:"Aucune donnée trouvée!"
      },
      order: [[3, 'desc'],[4, 'desc'],[0, 'asc']],
    } 
    this.getAllAskedDocuments()

  }

  getAllAskedDocuments(){
    this.DocumentRhService.getAllAskedDocuments().subscribe((response) => {
      this.DocumentRhService.listAskedDocsRh = response as document_rh[]
    }, (error) => {
      console.log(error)
    })
  }

  InitiliazeFormForEdit( documentRh : document_rh){
    this.DocumentRhService.formForValidation.patchValue({
    id : documentRh._id,
    nom: documentRh.askedBy.nom,
    prenom: documentRh.askedBy.prenom,
    titre: documentRh.titre,
    commentaire: documentRh.commentaire
    })
  }

  onEdit(targetModal: any, documentRh : document_rh){
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.InitiliazeFormForEdit(documentRh);
  }

  
  GenerateDocument(){
    this.DocumentRhService.generateDocument().subscribe(() => {
      this.modalService.dismissAll();
      window.location.reload()
    }, (error) => {
      console.log(error);
    })
  }

  deleteDocument(id: any){
    this.DocumentRhService.deleteDocument(id).subscribe( (res: any) => {
      this.DocumentRhService.getAllAskedDocuments().subscribe((res) => {
        this.DocumentRhService.listAskedDocsRh = res as document_rh[];        
      })
    }, (err: any) => {
    console.log(err);
    })
  }

}
