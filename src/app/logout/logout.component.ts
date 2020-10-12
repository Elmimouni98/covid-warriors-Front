import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service : CovidService,private router : Router) { }

  ngOnInit(): void {
    this.service.logOut();
    this.router.navigate(['login']);
  }

}
