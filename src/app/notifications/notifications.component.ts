import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public id : any;
  public num : any;
  public notifications : any;
  public size : number = 2;
  public currentPage : number = 0;
  public totalPages : number;
  public pages : Array<number>;

  constructor(private service:CovidService,private router : Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');
    this.service.notifications(this.id,this.currentPage,this.size)
    .subscribe(data=>{
      this.notifications = data;
      console.log(data);
      this.pages = new  Array( this.notifications.totalPages);
    },err=>{
      console.log(err);
    })

    this.service.count(this.id)
    .subscribe(data=>
      {
        this.num = data as number;
        console.log(data);
      },err=>
      {
        console.log(err);
      })
  }
  onPageNotification(i)
  {
    this.currentPage = i;
    this.ngOnInit();
  }

}
