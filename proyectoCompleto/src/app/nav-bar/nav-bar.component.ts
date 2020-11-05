import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  nombreEnlace1: string;
  nombreEnlace2: string;
  nombreEnlace3: string;
  nombreEnlace4: string;

  constructor() {
    this.nombreEnlace1 = "cambio1";
    this.nombreEnlace2 = "cambio2";
    this.nombreEnlace3 = "cambio3";
    this.nombreEnlace4 = "cambio4";
   }
   
   changeEnlace(nuevoNombre: string) {
    this.nombreEnlace1 = nuevoNombre;
  }
  //seleccionamos los nombres de los enlaces por defecto
  ngOnInit(): void {
    this.nombreEnlace1 = "cambio1";
    this.nombreEnlace2 = "cambio2";
    this.nombreEnlace3 = "cambio3";
    this.nombreEnlace4 = "cambio4";
  }

}
