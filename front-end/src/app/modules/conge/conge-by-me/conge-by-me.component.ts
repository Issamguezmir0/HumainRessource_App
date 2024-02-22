import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CongeService } from 'src/app/services/conge/conge.service';
import { Conge } from 'src/app/shared/models/conge';

@Component({
  selector: 'app-conge-by-me',
  templateUrl: './conge-by-me.component.html',
  styleUrls: ['./conge-by-me.component.scss']
})
export class CongeByMeComponent implements OnInit {

  constructor(public congeService: CongeService, private router: Router, private modalService: NgbModal, public route: ActivatedRoute) { }

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {
    this.getCongesByMeFromAPI();
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

  getCongesByMeFromAPI (){

    this.congeService.askedByMe().subscribe((response) => {
      this.congeService.listConges = response as Conge[];
      //console.log('Data :',response)
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

  Cancel(){
    this.congeService.ManageConge().subscribe((result) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    }, (err) => {
      console.log(err);
    })
  }

}
