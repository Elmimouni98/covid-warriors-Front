import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public id : string;
  public password : string;
  public account : any;
  public mode : number=0;
  public errorMessage : string;
  hide = true;
  form = new FormGroup({
    id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
   });

  constructor(private service:CovidService,private router : Router) { }

  ngOnInit(): void {
  }

  get passwordInput() { return this.form.get('password'); }
  onLogin()
  {
    this.service.login(this.id,this.password)
    .subscribe(data=>{
      this.account = data;
      console.log(data);
      sessionStorage.setItem('id', this.account.id);
      sessionStorage.setItem('nom', this.account.nom);
      sessionStorage.setItem('prenom', this.account.prenom);
      sessionStorage.setItem('ville', this.account.ville);
      sessionStorage.setItem('adresse', this.account.adresse);
      sessionStorage.setItem('role', this.account.role);
      this.mode = 1;
      if(sessionStorage.getItem('role') == "user"){
        this.router.navigateByUrl("/accueil");
      }
      else{
        this.router.navigateByUrl("/AccueilM");
      }
    },erreur=>{
      console.log(erreur);
      this.errorMessage = erreur.error.message;
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: this.errorMessage,
        showConfirmButton: true,
        timer: 2000
      })
    })
  }


}
