import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {
public id : string;
public idC : string;
public idCA : string;
public idCR : string;
public type : string;
public message : string;
public mode : number=0;
public errorMessage : string;
public mode2 : number=0;
public errorMessage2 : string;
public mode3 : number=0;
public errorMessage3 : string;

  form1 = new FormGroup({
    id: new FormControl('', Validators.required)
   });


   form2 = new FormGroup({
    id: new FormControl('', Validators.required)
   });


   form3 = new FormGroup({
    id: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
   });

  constructor(private service:CovidService,private router : Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');
  }

  notifier(){
    this.service.notifier(this.id,this.idC,this.type,this.message)
    .subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Notification envoyée !",
        showConfirmButton: true,
        timer: 2000
      })
    },err=>{
      console.log(err);
      this.errorMessage = err.error.message;
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: this.errorMessage,
        showConfirmButton: true,
        timer: 2000
      })
    })
  }
  avertir(){
    this.service.avertir(this.id,this.idCA)
    .subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Notification envoyée !",
        showConfirmButton: true,
        timer: 2000
      })
    },err=>{
      console.log(err);
      this.errorMessage2 = err.error.message;
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: this.errorMessage2,
        showConfirmButton: true,
        timer: 2000
      })
    })
  }
  recommander(){
    this.service.recommander(this.id,this.idCR)
    .subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Notification envoyée !",
        showConfirmButton: true,
        timer: 2000
      })
    },err=>{
      console.log(err);
      this.errorMessage3 = err.error.message;
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: this.errorMessage3,
        showConfirmButton: true,
        timer: 2000
      })
    })
  }

}