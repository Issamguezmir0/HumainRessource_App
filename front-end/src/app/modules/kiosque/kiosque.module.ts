import { AuthenticationGuard } from 'src/app/shared/guards/auth-guard/authentication.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiosqueRoutingModule } from './kiosque-routing.module';

/** Components */
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';
import { AskForDocumentComponent } from './ask-for-document/ask-for-document.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultationDocumentComponent } from './consultation-document/consultation-document.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';



@NgModule({
  declarations: [
    MesDemandesComponent, 
    AskForDocumentComponent, 
    ConsultationDocumentComponent
  ],
  imports: [
    CommonModule,
    KiosqueRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  exports: [
    MesDemandesComponent, 
    AskForDocumentComponent,
    ConsultationDocumentComponent,
    KiosqueRoutingModule
  ],
  providers: [
    AuthenticationGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class KiosqueModule { }
