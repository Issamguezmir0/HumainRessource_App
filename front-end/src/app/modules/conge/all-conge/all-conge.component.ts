import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CongeService } from 'src/app/services/conge/conge.service';
import { Conge } from 'src/app/shared/models/conge';

@Component({
  selector: 'app-all-conge',
  templateUrl: './all-conge.component.html',
  styleUrls: ['./all-conge.component.scss']
})
export class AllCongeComponent implements OnInit {

  constructor(public congeService: CongeService, private router: Router, private modalService: NgbModal) { }

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {
    this.getCongesFromAPI()
    
    this.dtOptions = {
      pageLength: 5,
      lengthChange: false,
      language: {
        info: "Affichage de _START_ à _END_ de _TOTAL_ enregistrements",
        infoEmpty: "Affichage de 0 enregistrement",
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
      stateSave: true
    };
  }

  /* GET ALL CONGES FROM SERVER */
  getCongesFromAPI (){
    this.congeService.getAll().subscribe((response) => {
      this.congeService.listConges = response as Conge[];
    }, (error) => {
      console.log(error);
    })    
  }

  InitiliazeFormForEdit( conge : Conge){
    this.congeService.formManageConge.patchValue({
    id : conge._id,
    startDate: conge.startDate,
    endDate: conge.endDate,
    type: conge.type,
    statut: conge.statut
    })
  }

  onEdit(targetModal: any, conge: Conge){

    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.InitiliazeFormForEdit(conge);
  }

  onChange(){
    console.log(this.congeService.listConges)
  }

  Validate(){
    this.congeService.ManageConge().subscribe((result) => {
      this.ngOnInit();
      this.modalService.dismissAll();
      window.location.reload()
    }, (err) => {
      console.log(err);
    })
  }

  Cancel(){
    this.congeService.ManageConge().subscribe((result) => {
      this.ngOnInit();
      this.modalService.dismissAll();
      window.location.reload()
    }, (err) => {
      console.log(err);
    })
  }
}
