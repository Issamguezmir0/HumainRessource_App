import { RoleGuard } from './../../shared/guards/role-guard/role.guard';
import { AuthGuard } from 'src/app/core/guards/auth-guard/auth.guard';
import { ConsultationDocumentComponent } from './consultation-document/consultation-document.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskForDocumentComponent } from './ask-for-document/ask-for-document.component';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';
import { AuthenticationGuard } from 'src/app/shared/guards/auth-guard/authentication.guard';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

const routes: Routes = [
  { path: 'mes-demandes', component: MesDemandesComponent ,children: [
    {path: 'ask-for-document', component: AskForDocumentComponent}
  ]},
  { path: 'consultation-demandes', component: ConsultationDocumentComponent, data: {role: 'Responsable'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiosqueRoutingModule { }
