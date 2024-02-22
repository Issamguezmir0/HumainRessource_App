
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

/** Components */
import { HomeComponent } from './shared/components/home/home.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignInComponent } from './login/sign-in/sign-in.component';


/** Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './shared/guards/auth-guard/authentication.guard';

const routes: Routes = [

  /** Dashboard */
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthenticationGuard] ,children: [
    { path: 'kiosque', loadChildren: () => import('./modules/kiosque/kiosque.module').then(m => m.KiosqueModule)},
    { path: 'facturation', loadChildren: () => import('./modules/facturation/facturation.module').then(test => test.FacturationModule)},
    { path: 'portail', loadChildren: () => import('./modules/portail/portail.module').then(test => test.PortailModule)},
    { path: 'conge', loadChildren: () => import('./modules/conge/conge.module').then(test => test.CongeModule)},
    { path: 'accueil', component: HomeComponent}
    
  ], runGuardsAndResolvers: 'always'},

  /** Login Module Routes */
  { path: 'sign-in', component:SignInComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'reset-password/:token' , component: ResetPasswordComponent, pathMatch: 'prefix'},
  { path: '', component: SignInComponent},


  /** Kiosque RH Module Routes */
  { path: 'kiosque', loadChildren: () => import('./modules/kiosque/kiosque.module').then(m => m.KiosqueModule) },
  
  
  
  /** 404 NOT FOUND */
  { path: '**', component: DashboardComponent, canActivate: [AuthenticationGuard] } // to change Page not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
