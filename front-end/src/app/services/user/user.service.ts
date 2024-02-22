import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers! : User[];

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  /** add user form - for admin */
  formforadd = this.fb.group({
    email : ["", [Validators.required, Validators.email]],
    password : ["", [Validators.minLength(8)]],
    nom : ["", Validators.required],
    prenom : ["", Validators.required],
    dateNaissance : ["", Validators.required],
    numTelephone: ["", Validators.required],
    cin : ["", Validators.required],
    date_cin: ["", Validators.required],
    sexe : ['', Validators.required],
    fonction : ["", Validators.required],
    date_rec: ["", Validators.required],
    role: ["", Validators.required]
  })

  InitiliazeFormForPost(){

    this.formforadd.setValue({
      
      email : "",
      password : "",
      nom : "",
      prenom : "",
      dateNaissance : "",
      numTelephone: "",
      cin : "",
      date_cin : "",
      sexe : '',
      fonction : "",
      date_rec :"",
      role: ""
    })
  }

  formEdit = this.fb.group({
    id: [''],
    nom: [''],
    prenom: [''],
    cin: [''],
    date_cin: [''],
    fonction: [''],
    date_rec: [''],
    salaire: [''],
    ID_CNSS: [''],
    nbEnfants: [''],
    statutConjuguale: [''],
    
  })

  getAll() {
    return this.http.get<User[]>(`http://localhost:5500/api/allemployee`);
  }

  add_user() {
    return this.http.post(`http://localhost:5500/api/adduser`, this.formforadd.value, { responseType : "text"}) ;
  }

  deleteUser(id: any) {
    return this.http.delete(`http://localhost:5500/api/deleteuser` + `/${id}`,  {responseType : "text"})
  }

  updateUser(){
    return this.http.put(`http://localhost:5500/api/updateuser` + `/` +  this.formEdit.controls.id.value ,this.formEdit.value,{responseType : "text"}) ;
  }

  getUser(){
    return this.http.get(`http://localhost:5500/api/user`)
  }

}
