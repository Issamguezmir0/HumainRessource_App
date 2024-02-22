import { CongeService } from 'src/app/services/conge/conge.service';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Conge } from 'src/app/shared/models/conge';
import * as moment from 'moment';
import allLocales from '@fullcalendar/core/locales-all';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {

  events = [] as any
  calendarOptions: CalendarOptions = {};

  constructor(public congeService: CongeService) { }

  ngOnInit(): void {
    this.getAllConge()
  }

  getAllConge(){
    this.congeService.getAll().subscribe((result) => {
      this.congeService.listEvents = result as Conge[]
      this.events = this.ArrayToObject(this.congeService.listEvents)
      this.calendarOptions = {
        locales: allLocales,
        locale: 'fr',
        themeSystem: 'bootstrap',
        initialView: 'dayGridMonth',
        events: this.events,
        firstDay: 0
      }
      console.log(this.events)
    }, (error) => {
      console.log(error)
    })
  }

  ArrayToObject(tab : any){
    let tableau = [] as any
    let obj = {} 
    for(let i=0; i<tab.length; i++){
      if (tab[i].statut == 'Validé') {
        if (tab[i].type == 'Congé') {
          obj= {color: '#ce2029',title: tab[i].type + ' : ' +  tab[i].empNom.nom + ' ' + tab[i].empNom.prenom , start: moment(tab[i].startDate).format("YYYY-MM-DD"), end: moment(tab[i].endDate).format("YYYY-MM-DD")}
          tableau= [...tableau,obj]
        } else if (tab[i].type == 'Congé Sans Solde') {
          obj= {color: '#228b22',title: tab[i].type + ' : ' +  tab[i].empNom.nom + ' ' + tab[i].empNom.prenom, start: moment(tab[i].startDate).format("YYYY-MM-DD"), end: moment(tab[i].endDate).format("YYYY-MM-DD")}
          tableau= [...tableau,obj]
        } else if (tab[i].type == 'Congé Maladie') {
          obj= {color: '#214fc6',title: tab[i].type + ' : ' +  tab[i].empNom.nom + ' ' + tab[i].empNom.prenom, start: moment(tab[i].startDate).format("YYYY-MM-DD"), end: moment(tab[i].endDate).format("YYYY-MM-DD")}
          tableau= [...tableau,obj]
        } else {
          obj= {color: '#ffa500',title: tab[i].type + ' : ' +  tab[i].empNom.nom + ' ' + tab[i].empNom.prenom, start: moment(tab[i].startDate).format("YYYY-MM-DD"), end: moment(tab[i].endDate).format("YYYY-MM-DD")}
          tableau= [...tableau,obj]
        }
        
      }
    }
    return tableau
}



}
