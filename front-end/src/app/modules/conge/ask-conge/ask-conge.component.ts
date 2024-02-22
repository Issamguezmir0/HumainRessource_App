import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/services/conge/conge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-conge',
  templateUrl: './ask-conge.component.html',
  styleUrls: ['./ask-conge.component.scss']
})
export class AskCongeComponent implements OnInit {

  
  selected!: Date | null;

  //form!: FormGroup;

  constructor(fb: FormBuilder, public congeService: CongeService, private router: Router) {
    
    // this.form = fb.group({
    //   date: [{begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25)}]
    // });
   }

  ngOnInit(): void {
    this.congeService.InitiliazeFormForPost()
  }

  inlineRangeChange($event: any) {
    this.congeService.inlineRange = $event;
    console.log(this.congeService.inlineRange)
  }

  AskConge(){
    
    this.congeService.askConge().subscribe((response) =>{  
      this.router.navigate(['/dashboard/conge/mes-demandes']).then(() => {
        window.location.reload()
        console.log('Post Done')
      })
    }, (error) => {
      console.log(error);
    })
  }
}
