import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.scss']
})
export class AddEmployeComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUserAdmin(){
    
    this.userService.add_user().subscribe(() =>{ 
      console.log("Done")
      window.location.reload()
      this.router.navigate(['dashboard/portail/list-employe'])
    }, (error) => {
      console.log(error);
    })
  }

}
