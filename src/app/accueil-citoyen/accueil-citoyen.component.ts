import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-citoyen',
  templateUrl: './accueil-citoyen.component.html',
  styleUrls: ['./accueil-citoyen.component.css']
})
export class AccueilCitoyenComponent implements OnInit {
public id : any;
public nom : any;
public prenom : any;
public num : number;
  constructor(private service:CovidService,private router : Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
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
  user:any=[{
    active:false
  }]

  click(user){
    user.active = !user.active
  }

}
