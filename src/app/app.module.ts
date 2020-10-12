import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MinistereHomeComponent } from './ministere-home/ministere-home.component';
import { NotifierComponent } from './notifier/notifier.component';
import { LogoutComponent } from './logout/logout.component';
import { TypeNotifComponent } from './type-notif/type-notif.component';
import { NotifierGroupComponent } from './notifier-group/notifier-group.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { AccueilCitoyenComponent } from './accueil-citoyen/accueil-citoyen.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ConsignesComponent } from './consignes/consignes.component';
import { ProfilComponent } from './profil/profil.component'

@NgModule({
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MinistereHomeComponent,
    NotifierComponent,
    LogoutComponent,
    TypeNotifComponent,
    NotifierGroupComponent,
    SearchContactComponent,
    AccueilCitoyenComponent,
    NotificationsComponent,
    ConsignesComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatBadgeModule, 
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
