import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
id : any;
nom : any;
prenom : any;
adresse : any;
ville : any;
role : any;
  constructor() { }

  ngOnInit(): void {

    this.id = sessionStorage.getItem('id');
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
    this.ville = sessionStorage.getItem('ville');
    this.adresse = sessionStorage.getItem('adresse');
    this.role = sessionStorage.getItem('role');
  }

}
