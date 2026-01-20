import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioService {

  constructor() { }

  private listaCoches: any[] = [
    { id: 1, marca: "Toyota", modelo: "Corolla", precio: 22000, imagen: "../assets/img/toyota.webp" },
    { id: 2, marca: "Volkswagen", modelo: "Golf", precio: 24500, imagen: "../assets/img/volkswagen.webp" },
    { id: 3, marca: "Ford", modelo: "Mustang", precio: 42000, imagen: "../assets/img/ford.webp" },
    { id: 4, marca: "BMW", modelo: "Serie 3", precio: 39000, imagen: "../assets/img/bmw.webp" },
    { id: 5, marca: "Tesla", modelo: "Model 3", precio: 41000, imagen: "../assets/img/tesla.webp" }
  ];

  getCoches(): any[] {
    return this.listaCoches;
  }

}
