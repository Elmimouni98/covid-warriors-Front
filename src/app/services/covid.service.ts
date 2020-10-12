import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Citoyen } from '../Models/citoyen.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  public host:string = "http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  login(id:string,password:string){
    return this.httpClient.get(this.host+"/login?id="+id+"&password="+password);
    }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('id');
    console.log(sessionStorage.getItem('id'));
    console.log(!(user === null))
    return !(user === null)
  }
  
  logOut() {
    sessionStorage.removeItem('id')
  }

  public saveCitoyen(url,citoyen:Citoyen){
    return this.httpClient.post(url,citoyen);
  }

  public notifier(idM,id,type,message){
    return this.httpClient.get(this.host+"/notifier/" + idM + "/" +id + "/" + type + "/" + message);
  }
  public avertir(idM,id){
    return this.httpClient.get(this.host+"/avertir/" + idM + "/" +id);
  }
  public recommander(idM,id){
    return this.httpClient.get(this.host+"/recommander/" + idM + "/" +id);
  }
  public getVilles(){
    return this.httpClient.get(this.host+"/villes");
  }
  public recommanderGroup(idM,ville)
  {
    return this.httpClient.get(this.host+"/recommanderGroup/" + idM + "/" +ville);

  }
  public AvertirGroup(idM,ville)
  {
    return this.httpClient.get(this.host+"/avertirGroup/" + idM + "/" +ville);
  }
  public notifierGroup(idM,ville,type,message)
  {
    return this.httpClient.get(this.host+"/notifierGroup/" + idM + "/" +ville+ "/" +type+ "/" +message);
  }
  public search(id:string,page:number,size:number){
    return this.httpClient.get(this.host + "/chercher?id="+id+"&page="+page+"&size="+size);
  }
  public NotifyAll(id){
    return this.httpClient.get(this.host + "/recommanderAll/"+id);
  }
  public count(id){
    return this.httpClient.get(this.host + "/numberMsg/"+id);
  }
  public notifications(id,page,size){
    return this.httpClient.get(this.host + "/notifications?id="+id+"&page="+page+"&size="+size);
  }
}
