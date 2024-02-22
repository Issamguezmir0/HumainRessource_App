import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturationRoutingModule } from './facturation-routing.module';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AddClientComponent } from './add-client/add-client.component';
import { CreateFactDocumentComponent } from './create-fact-document/create-fact-document.component';
import { DocumentResumeComponent } from './document-resume/document-resume.component';
import { ListFactDocumentsComponent } from './list-fact-documents/list-fact-documents.component';


@NgModule({
  declarations: [ListClientsComponent, AddClientComponent, CreateFactDocumentComponent, DocumentResumeComponent, ListFactDocumentsComponent],
  imports: [
    CommonModule,
    FacturationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    ListClientsComponent,
    AddClientComponent,
    CreateFactDocumentComponent,
    DocumentResumeComponent,
    ListFactDocumentsComponent
  ]
})
export class FacturationModule { }
