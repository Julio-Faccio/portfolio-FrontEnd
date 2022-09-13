import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Perfil } from '../Domain/perfil';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor( private http:HttpClient) { }

  obtenerDatos():Observable<Perfil>{
    console.log("Servicio de obtencion de datos corriendo...");
    return this.http.get <Perfil> ('./assets/Data/data.json'); //MOck: data esta todo.
  }
}
