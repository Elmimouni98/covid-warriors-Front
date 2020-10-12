import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MinistereHomeComponent } from './ministere-home/ministere-home.component';
import { AuthService } from './services/auth.service';
import { NotifierComponent } from './notifier/notifier.component';
import { LogoutComponent } from './logout/logout.component';
import { TypeNotifComponent } from './type-notif/type-notif.component';
import { NotifierGroupComponent } from './notifier-group/notifier-group.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { AccueilCitoyenComponent } from './accueil-citoyen/accueil-citoyen.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConsignesComponent } from './consignes/consignes.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'AccueilM',component:MinistereHomeComponent,canActivate:[AuthService]
  },
  {
    path:'TypeNotification',component:TypeNotifComponent,canActivate:[AuthService]
  },
  {
    path:'notifier',component:NotifierComponent,canActivate:[AuthService]
  },
  {
    path:'notifierGroup',component:NotifierGroupComponent,canActivate:[AuthService]
  },
  {
    path:'logout',component:LogoutComponent,canActivate:[AuthService]
  },
  {
    path:'search',component:SearchContactComponent,canActivate:[AuthService]
  },
  {
    path:'accueil',component:AccueilCitoyenComponent,canActivate:[AuthService]
  },
  {
    path:'notifications',component:NotificationsComponent,canActivate:[AuthService]
  },
  {
    path:'consignes',component:ConsignesComponent,canActivate:[AuthService]
  },
  {
    path:'profil',component:ProfilComponent,canActivate:[AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
