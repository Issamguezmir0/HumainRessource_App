import { ProfilComponent } from './profil/profil.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list-employe', component: ListEmployeComponent},
  { path: 'add-employe', component: AddEmployeComponent},
  { path: 'profil', component: ProfilComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortailRoutingModule { }
