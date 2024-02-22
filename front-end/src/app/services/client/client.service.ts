import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  listClient!: Client[];
  clientsListedByName = [""]

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  formforclientadd = this.fb.group({
       
    email : ["",[ Validators.required, Validators.email]],
    client_name : ["", Validators.required],
    contact_principal : ["", Validators.required],
    raison_sociale : ["", Validators.required],
    numTelephone: ["", Validators.required],
    site_web : ["", Validators.required],
    adresse : ["", Validators.required],
    pays: ["", Validators.required],
    ville: ["", Validators.required],
    code_postal: ["", Validators.required],
    RIB : ["", Validators.required],
    RC : ["", Validators.required],
    MF : ["", Validators.required],
    Code_TVA : ["", Validators.required]
  })

  InitiliazeFormForPost(){
    this.formforclientadd.setValue({
      client_name:"",
      email : "",
      contact_principal : "",
      raison_sociale : "",
      numTelephone: "",
      site_web : "",
      adresse : "",
      pays: "",
      ville: "",
      code_postal: "",
      RIB : "",
      RC : "",
      MF : "",
      Code_TVA : ""
    })
  }

  formforclientedit = this.fb.group({
    id: [''],
    contact_principal: [''],
    client_name: [''],
    site_web: [''],
    email: [''],
    adresse: [''],
    ville: [''],
    pays: [''],
    code_postal:[''],
    RIB: [''],
    numTelephone: [''],
    RC: [''],
    MF: [''],
    Code_TVA: ['']
  })

  get_all_clients() {
    return this.http.get<Client[]>(`http://localhost:5500/api/list-client`, {withCredentials: true});
  }

  add_client() {
    console.log("test")
    return this.http.post(`http://localhost:5500/api/add-client`, this.formforclientadd.value, {withCredentials: true, responseType : "text"}) ;
  }

  update_client(){
    return this.http.put(`http://localhost:5500/api/update-client` + `/` + this.formforclientedit.controls.id.value, this.formforclientedit.value, {withCredentials: true, responseType : "text"}) ;
  }

  deleteClient(id: any) {
    return this.http.delete(`http://localhost:5500/api/delete-client` + `/${id}`,  {withCredentials: true, responseType : "text"})
  }
}
