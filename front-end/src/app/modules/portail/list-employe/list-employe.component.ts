import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/models/user';


@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.scss']
})
export class ListEmployeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor(public userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEmployeesFromAPI()
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
      order: [[0, 'asc']],
    }
  }

  /* GET ALL EMPLOYEES FROM SERVER */
  getEmployeesFromAPI (){

    this.userService.getAll().subscribe((response) => {
      this.userService.listUsers = response as User[];
      //console.log('Data :',response)
    }, (error) => {
      console.log(error);
    })    
  }

  /* DELETE ONE ROW */
  deleteDataFromAPI(id: any) {

    this.userService.deleteUser(id).subscribe( (res: any) => {
      this.userService.getAll().subscribe((res) => {
        this.userService.listUsers = res as User[];        
      })
    }, (err: any) => {
    console.log(err);
    });
  }

  /** UPDATE ONE ROW */
  InitiliazeFormForEdit( user : User){
    this.userService.formEdit.patchValue({

    id : user._id,
    nom : user.nom,
    prenom: user.prenom,
    fonction: user.fonction,
    date_rec: user.date_rec,
    cin: user.cin,
    date_cin: user.date_cin,
    statutConjuguale: user.statutConjuguale,
    nbEnfants: user.nbEnfants,
    ID_CNSS: user.ID_CNSS,
    salaire: user.salaire,
    
    })
  }

  onEdit(targetModal: any, user: User){

    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.InitiliazeFormForEdit(user);
  }

  updateEmploye(){
    this.userService.updateUser().subscribe((result) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    }, (err) => {
      console.log(err);
    })
  }  

}
