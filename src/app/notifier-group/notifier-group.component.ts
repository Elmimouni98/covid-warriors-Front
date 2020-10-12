import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-notifier-group',
  templateUrl: './notifier-group.component.html',
  styleUrls: ['./notifier-group.component.css']
})
export class NotifierGroupComponent implements OnInit {

  public villes : any;
  public id : String;
  public ville1 : String;
  public ville2 : String;
  public ville3 : String;
  public type : String;
  public message : String;
  public errorMessage : string;
  public errorMessage2 : string;
  public errorMessage3 : string;

  form1 = new FormGroup({
    ville1: new FormControl('', Validators.required)
   });


   form2 = new FormGroup({
    ville2: new FormControl('', Validators.required)
   });


   form3 = new FormGroup({
    ville3: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
   });


  constructor(private service:CovidService,private router : Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');

    this.service.getVilles()
    .subscribe(data=>{
      this.villes = data;
    },err=>{{
      console.log(err);
    }})
  }

  recommanderGroup()
  {
    this.service.recommanderGroup(this.id,this.ville1)
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

  avertirGroup()
  {
    this.service.AvertirGroup(this.id,this.ville2)
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

  notifierGroup()
  {
    this.service.notifierGroup(this.id,this.ville3,this.type,this.message)
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
