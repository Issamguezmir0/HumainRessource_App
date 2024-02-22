import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { document_rh } from 'src/app/shared/models/document-rh';

@Injectable({
  providedIn: 'root'
})
export class DocumentRhService {

  listDocsRh!: document_rh[];
  listAskedDocsRh!: document_rh[];
  MyNonTreatedDocuments = [] as any

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  formForAsk = this.fb.group({   
    type : ["", Validators.required],
    titre : ["", Validators.required],
    commentaire : ["", Validators.required]
  })


  formForValidation = this.fb.group({
    id: [''],
    nom: [''],
    prenom: [''],
    titre: [''],
    withEmail: [''],
    withLink: [''],
    commentaire: [''],
    mois: [''],
    debut_stage: [''],
    fin_stage: ['']
  })

  askedByMe() {
    return this.http.get<document_rh[]>(`http://localhost:5500/api/get-my-documents`);
  }

  askForDocument() {
    return this.http.post(`http://localhost:5500/api/ask-for-document`, this.formForAsk.value, {responseType: "text"})
  }

  getAllAskedDocuments(){
    return this.http.get<document_rh[]>(`http://localhost:5500/api/get-all-demands`, {withCredentials: true})
  }

  generateDocument(){
    return this.http.put(`http://localhost:5500/api/generate-document` + `/` +  this.formForValidation.controls.id.value, {withEmail: this.formForValidation.controls.withEmail.value, withLink: true, mois: this.formForValidation.controls.mois.value, date_debut: this.formForValidation.controls.debut_stage.value, date_fin: this.formForValidation.controls.fin_stage.value }, {responseType: 'text'})
  }

  deleteDocument(id: any){
    return this.http.delete(`http://localhost:5500/api/delete-document`  + `/${id}`,  {responseType : "text"})
  }

  getMyNonTreatedDocuments() {
    return this.http.get<document_rh[]>(`http://localhost:5500/api/get-non-treated`)
    
  }
}
