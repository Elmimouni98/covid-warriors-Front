import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidService } from '../services/covid.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {
  public contacts ;
  public contact ;
  public page : number=0;
  public size : number = 5;
  public id : string;
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;

  constructor(private service:CovidService,private router : Router) { }

  ngOnInit(): void {
  }
  onPageContact(i)
  {
    this.currentPage = i;
    this.Chercher();
  }
  onChercher(form:any){

    this.currentPage=0;
    this.id=form.id;
    this.Chercher();
  } 
  Chercher(){
    this.service.search(this.id,this.currentPage,this.size)
    .subscribe(data=>{
      this.contacts=data;
      console.log(data);
      this.pages = new  Array( this.contacts.totalPages);
      console.log(data);
    },err=>{
        console.log(err);
      });
  }
  recommander(idM,idC){
    this.service.recommander(idM,idC)
    .subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Notification envoyée',
        showConfirmButton: true,
        timer: 2000
      })
    },err=>{
      console.log(err);
    })
  }

  recommanderAll(){
    console.log(this.id);
    this.service.NotifyAll(this.id)
    .subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Notification envoyée',
        showConfirmButton: true,
        timer: 2000
      })
    },err=>{
      console.log(err);
    })
  }

}
