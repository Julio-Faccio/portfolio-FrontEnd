import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor( private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("Servicio de obtencion de datos corriendo...");
    return this.http.get('./assets/Data/persona.json'); //persona.json
  }
}
