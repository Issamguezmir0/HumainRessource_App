import { ListFactDocumentsComponent } from './list-fact-documents/list-fact-documents.component';
import { DocumentResumeComponent } from './document-resume/document-resume.component';
import { CreateFactDocumentComponent } from './create-fact-document/create-fact-document.component';
import { AddClientComponent } from './add-client/add-client.component';
import { RoleGuard } from './../../shared/guards/role-guard/role.guard';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/shared/guards/auth-guard/authentication.guard';

const routes: Routes = [
  {path: 'list-clients', component: ListClientsComponent, children: [
    {path: 'add-client', component:AddClientComponent}
  ]},
  {path: 'create-fact-document', component: CreateFactDocumentComponent, children: [
    {path: 'document-resume', component: DocumentResumeComponent}
  ]},
  {path: 'list-fact-documents', component: ListFactDocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturationRoutingModule { }
