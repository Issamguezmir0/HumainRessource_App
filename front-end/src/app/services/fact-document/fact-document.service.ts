import { Client } from './../../shared/models/client';
import { factDocument } from './../../shared/models/fact-document';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FactDocumentService {

  listFactDocs!: factDocument[]
  selectedDevise: string = ""
  articles = [] as any
  subtotal: number = 0
  tva_checked = false
  tva_global: number = 0
  tva_total: number = 0
  totalFacture: number = 0
  emailCheck: Boolean = false

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  formFirst = this.fb.group ({
    type: ["", Validators.required],
    client_name: ["", Validators.required],
    description: ["", Validators.required],
    devise: ["", Validators.required],
    globaltva: ["", Validators.required],
    globaltva_value: ["", Validators.required]
  })

  formAddArticle = this.fb.group ({
    ref:[""],
    prestation: ["", Validators.required],
    description: ["", Validators.required],
    prix: ["", Validators.required],
    tva: [0, Validators.required]  
  })


  generate_document(){
    console.log("checked:", this.emailCheck)
    return this.http.post(`http://localhost:5500/api/create-fact-document`, {
      ...this.formFirst.value, article_table: this.articles, withLink: true, total_facture: this.totalFacture, total_tva: this.tva_total, subtotal: this.subtotal, withEmail: this.emailCheck, articles: this.articles}, 
    {withCredentials: true, responseType : "text"})
  }

  get_all_documents(){
    return this.http.get<factDocument[]>(`http://localhost:5500/api/list-fact-documents`, {withCredentials: true})
  }

  get_selected_client(){
    return this.http.put(`http://localhost:5500/api/get-selected-client`, this.formFirst.value ,{withCredentials: true})
  }

  delete_document(id: any){
    return this.http.delete(`http://localhost:5500/api/delete-fact-document/${id}`, {responseType : "text"})
  }

  convert_to_facture(id:any){
    return this.http.put(`http://localhost:5500/api/update-fact-document/${id}`, {withLink: true}, {responseType: 'text'})
  }



}
