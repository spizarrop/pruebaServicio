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

  agregarCoche(marca: string, modelo: string, precio: number){
    const nuevoCoche = {id: this.listaCoches.length+1, marca, modelo, precio}
    this.listaCoches.push(nuevoCoche);
  }

  eliminarCoche(id: number){
    this.listaCoches = this.listaCoches.filter(c => c.id !== id);
  }

  modificarCoche(id: number, marca: string, modelo: string, precio: number){
    const coche = this.listaCoches.find(coche => coche.id === id);

    if (coche) {
      coche.marca = marca;
      coche.modelo = modelo;
      coche.precio = precio;
    }
  }

}
