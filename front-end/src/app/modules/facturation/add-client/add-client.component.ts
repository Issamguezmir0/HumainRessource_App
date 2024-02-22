import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(public clientService: ClientService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clientService.InitiliazeFormForPost();
  }

  addClient(){
    this.clientService.add_client().subscribe(() =>{ 
      this.router.navigate(['dashboard/facturation/list-clients']).then(() => {
        window.location.reload() 
      })
    }, (error) => {
      console.log(error);
    })
  }

}
