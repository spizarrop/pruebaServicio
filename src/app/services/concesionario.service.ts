import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  private vehiculos: any[] = [
    { id: 1, marca: "Toyota Corolla", precio: 22000 },
    { id: 2, marca: "Volkswagen Golf", precio: 24500 },
    { id: 3, marca: "Ford Mustang", precio: 42000 },
    { id: 4, marca: "BMW Serie 3", precio: 39000 },
    { id: 5, marca: "Tesla Model 3", precio: 41000 }
  ];

  getProducto(): any[] {
    return this.vehiculos;
  }

}
