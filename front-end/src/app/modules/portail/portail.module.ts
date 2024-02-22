import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortailRoutingModule } from './portail-routing.module';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [ListEmployeComponent, AddEmployeComponent, ProfilComponent],
  imports: [
    CommonModule,
    PortailRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    ListEmployeComponent,
    AddEmployeComponent,
    ProfilComponent
  ]
})
export class PortailModule { }
