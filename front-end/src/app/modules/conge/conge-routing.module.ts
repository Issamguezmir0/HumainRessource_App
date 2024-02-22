import { CalendrierComponent } from './calendrier/calendrier.component';
import { AllCongeComponent } from './all-conge/all-conge.component';
import { AskCongeComponent } from './ask-conge/ask-conge.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongeByMeComponent } from './conge-by-me/conge-by-me.component';

const routes: Routes = [
  {path: 'get-all-conge', component: AllCongeComponent},
  {path: 'mes-demandes', component: CongeByMeComponent, children: [
    {path: 'ask-conge', component: AskCongeComponent}
  ]},
  {path: 'calendrier', component: CalendrierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongeRoutingModule { }
