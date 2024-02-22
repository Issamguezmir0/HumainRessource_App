import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from './../../../services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  constructor(public clientService: ClientService, private modalService: NgbModal, public authService: AuthenticationService) { }

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {
    this.getClientsList();
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

  /* GET ALL CLIENTS FROM SERVER */
  getClientsList (){
    this.clientService.get_all_clients().subscribe((response) => {
      this.clientService.listClient = response as Client[];
    }, (error) => {
      console.log(error);
    })    
  }

  /** Update client informations */

  InitiliazeFormForClientEdit( client : Client){
    this.clientService.formforclientedit.patchValue({

    id : client._id,
    contact_principal : client.contact_principal,
    client_name: client.client_name,
    site_web: client.site_web,
    email: client.email,
    numTelephone: client.numTelephone,
    adresse: client.adresse,
    ville: client.ville,
    pays: client.pays,
    code_postal: client.code_postal,
    RIB: client.RIB,
    RC: client.RC,
    MF: client.MF,
    Code_TVA: client.Code_TVA
    })
  }

  onEdit(targetModal: any, client: Client){

    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.InitiliazeFormForClientEdit(client);
  }

  updateClient(){

    this.clientService.update_client().subscribe((result) => {
      console.log(result)
      this.ngOnInit();
      this.modalService.dismissAll();
    }, (err) => {
      console.log(err);
    })
  }  


  /* DELETE ONE ROW */
  deleteOneClient(id: any) {
    this.clientService.deleteClient(id).subscribe( (res: any) => {
      this.clientService.get_all_clients().subscribe((res) => {
        this.clientService.listClient = res as Client[];  
        window.location.reload()      
      })
    }, (err: any) => {
    console.log(err);
    });
  }
}


