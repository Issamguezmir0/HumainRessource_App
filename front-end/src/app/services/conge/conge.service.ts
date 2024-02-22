import { Conge } from './../../shared/models/conge';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  listConges!: Conge[]
  inlineRange!: any;
  listEvents!: Conge[] 
  listMyNonTreated = [] as any

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  formforadd = this.fb.group({   
    startDate : ["", Validators.required],
    endDate : ["", Validators.required],
    type : ["", Validators.required]
  })

  formAskConge = this.fb.group({
    type: ["", Validators.required]
  })

  InitiliazeFormForPost(){

    this.formforadd.setValue({
      startDate : "",
      endDate : "",
      type : ""
    })
  }

  formManageConge = this.fb.group({
    
    id: [''],
    startDate : [''],
    endDate : [''],
    type: [''],
    statut: ['']
  })

  ManageConge(){
    return this.http.put(`http://localhost:5500/api/change-statut` + `/` +  this.formManageConge.controls.id.value ,this.formManageConge.value,{responseType : "text" , withCredentials: true}) ;
  }

  askConge() {
    return this.http.post(`http://localhost:5500/api/ask-conge`, {...this.formAskConge.value, startDate: this.inlineRange.begin, endDate: this.inlineRange.end}, {responseType : "text", withCredentials: true}) ;
  }

  getAll() {
    return this.http.get<Conge[]>(`http://localhost:5500/api/get-all-conge`);
  }

  askedByMe() {
    return this.http.get<Conge[]>(`http://localhost:5500/api/askedByMe`)
  }

  MyNonTreatedConge() {
    return this.http.get<Conge[]>(`http://localhost:5500/api/my-non-treated-conge`)
  }

}
