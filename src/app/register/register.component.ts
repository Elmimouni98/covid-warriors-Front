import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';
import { Citoyen } from '../Models/citoyen.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public citoyen : Citoyen = new Citoyen();
  public mode : number = 0;
  public errorMessage : string;
  hide = true;
  hide2 = true;

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required)
   });

  constructor(private service:CovidService,private router : Router) { }

  ngOnInit(): void {
  }
  get passwordInput() { return this.form.get('password'); }

  get repasswordInput() { return this.form.get('repassword'); }

  onSaveCitoyen()
  {

    this.service.saveCitoyen(this.service.host + "/register",this.citoyen)
    .subscribe(data=>{
      console.log(data);
      this.mode=1;
      this.router.navigateByUrl("/login");
    },err=>{
      console.log(err);
      this.errorMessage=err.error.message;
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
