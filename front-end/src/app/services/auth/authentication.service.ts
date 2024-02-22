import { User } from 'src/app/shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/utils/password.validator';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  role: any;
  isLogin = false;
  redirectUrl = ""
  loggedInUser = {} as User
  errorMessage: any

  constructor(private router: Router, public fb: FormBuilder, private http: HttpClient) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  formAddEmail = this.fb.group({
    email: ['']
  })

  formEditPassword = this.fb.group({
    resetLink: [''],
    newPass: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, {
    validator: MustMatch
  })

  editProfile = this.fb.group({
    id: [''],
    nom: [''],
    prenom: [''],
    dateNaissance: [''],
    numTelephone: [''],
    adresse: [''],
    ville: [''],
    pays: [''],
    statutConjuguale: [''],
    nbEnfants: [''],
    experience: [''],
    skills:['']
  })

  formNewPassword = this.fb.group({
    //password: [''],
    newPass: ["", Validators.required],
    confirmPassword: ["", Validators.required],
  }, {
    validator: MustMatch
  })

  login(){
    return this.http.post(`http://localhost:5500/api/admin-login`, this.loginForm.getRawValue(), {responseType: 'text'})
    .subscribe((res) => {
      //console.log(res);
      const result = JSON.parse(res)
      sessionStorage.setItem('token', result.token)
      sessionStorage.setItem('Role', result.savedAdmin.role)
      sessionStorage.setItem('user', result.savedAdmin._id)
      this.router.navigate((['/dashboard/accueil']))
    }, (error) => {
      console.log(error)
      this.errorMessage = error
    })
  }

  forgotPassword() {
    return this.http.put(`http://localhost:5500/api/forgot-password-user`, this.formAddEmail.value, {responseType : "text"})
  }

  resetPassword() {
    return this.http.put(`http://localhost:5500/api/reset-password-user`, this.formEditPassword.value, {responseType : "text"})
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['/sign-in'])
  }

  getLoggedInUser() {
    return this.http.get("http://localhost:5500/api/admin-login", {responseType: 'text', withCredentials: true})
  }

  updateProfile(){
    return this.http.put(`http://localhost:5500/api/updateuser` + `/` +  this.editProfile.controls.id.value ,this.editProfile.value,{responseType : "text"}) ;
  }

  updateNewPassword(){
    console.log(this.formNewPassword.value)
    return this.http.put(`http://localhost:5500/api/new-password-user` ,this.formNewPassword.value, {responseType : "text"})
  }

  getRole() {
    this.role = sessionStorage.getItem('Role')
    return this.role
  }

  isLoggedIn(){
    const loggedIn = sessionStorage.getItem('token');
    if (loggedIn)
    this.isLogin = true
    else
    this.isLogin = false
    return this.isLogin;
  }

}
