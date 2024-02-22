
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { CongeByMeComponent } from './conge-by-me/conge-by-me.component';
import { AskCongeComponent } from './ask-conge/ask-conge.component';
import { AllCongeComponent } from './all-conge/all-conge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card'
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker-ext';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular';




@NgModule({
  declarations: [CongeByMeComponent, AskCongeComponent, AllCongeComponent, CalendrierComponent],
  imports: [
    CommonModule,
    CongeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,

    MatDatepickerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    SatDatepickerModule,
    SatNativeDateModule,
    FullCalendarModule  
  ],
  exports: [
    CongeByMeComponent,
    AskCongeComponent,
    AllCongeComponent,
    CalendrierComponent
  ],
  providers:[
    MatDatepickerModule
  ]
})
export class CongeModule { }
