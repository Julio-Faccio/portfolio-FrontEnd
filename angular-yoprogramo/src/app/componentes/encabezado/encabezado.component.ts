import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/Domain/perfil';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio!:Perfil; //para leer este objeto que almacena el portfolio.
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log('flag',data);
      this.miPortfolio=data;
    }); //es una clase, se accede como tal
  }

}
