import { CongeModule } from './modules/conge/conge.module';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { PortailModule } from './modules/portail/portail.module';
import { RoleGuard } from './shared/guards/role-guard/role.guard';
import { AuthGuard } from './core/guards/auth-guard/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/** Modules */
import { KiosqueModule } from './modules/kiosque/kiosque.module';
import { LoginModule } from './login/login.module';
import { FacturationModule } from './modules/facturation/facturation.module';

/** Components */
import { AsideNavComponent } from './shared/components/aside-nav/aside-nav.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationGuard } from './shared/guards/auth-guard/authentication.guard';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker-ext';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    AsideNavComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    KiosqueModule,
    FacturationModule,
    PortailModule,
    CongeModule,
    DataTablesModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SatDatepickerModule,
    SatNativeDateModule,
    FullCalendarModule 
  ],
  providers: [
    CookieService, 
    AuthGuard,
    AuthenticationGuard,
    RoleGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
