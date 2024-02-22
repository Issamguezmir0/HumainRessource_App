import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  username='';
  email='';
  clicked = false

  constructor(public authService: AuthenticationService, private router: Router,private http:HttpClient) { }
  form!: FormGroup;
  ngOnInit(): void {
    this.reloadImg()
    this.getConnectedUser();
    this.form = new FormGroup({
      file:new FormControl()
    })

  }
reloadImg(){
  this.http.get("http://localhost:5500/api/getuserById/"+sessionStorage.getItem('user')).subscribe((data:any)=>{
    this.profileImage=data.image
    this.username=data.username
    this.email=data.email
  })
}
  getConnectedUser(){
    this.authService.getLoggedInUser().subscribe((user) => {
      console.log(user)
      const connectedUser = JSON.parse(user)
      this.authService.loggedInUser = connectedUser
      this.InitiliazeFormForEdit(this.authService.loggedInUser)
    })
  }

  /** Update my profile */
  InitiliazeFormForEdit(user: User){
    console.log(user)
    this.authService.editProfile.patchValue({
      id: user._id,
      nom: user.nom,
      prenom: user.prenom,
      dateNaissance: user.dateNaissance,
      numTelephone: user.numTelephone,
      adresse: user.adresse,
      ville: user.ville,
      pays: user.pays,
      statutConjuguale: user.statutConjuguale,
      nbEnfants: user.nbEnfants,
      experience: user.experience,
      skills: user.skills
    })
  }
   /** Update my profil pictur */


  updateInfos(){
    this.authService.updateProfile().subscribe((newInfos) => {
      console.log(newInfos)
      window.location.reload()
    }, (error) => {
      console.log(error)
    })
  }

  toggle(){
    this.clicked =! this.clicked
  }

  updatePassword(){
    this.authService.updateNewPassword().subscribe((res) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }

  updatePhoto(event :Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({file:file});
    this.form.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);

  }
  profileImage='';
  modifyPhoto(){
    const data=new FormData();
    data.append("file",this.form.value.file);
    console.log(data);
    this.http.post("http://localhost:5500/api/updateImage",data).subscribe((data:any) =>{
      console.log(data)
      this.profileImage=data.image;    this.reloadImg()
    })
  }

}
