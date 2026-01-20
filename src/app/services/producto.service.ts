import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  productos: any[] = [
    {id: 1, nombre: "iPhone", precio: 1200},
    {id: 2, nombre: "iPhone", precio: 1200},
    {id: 3, nombre: "iPhone", precio: 1200},
    {id: 4, nombre: "iPhone", precio: 1200},
    {id: 5, nombre: "iPhone", precio: 1200}
  ];

}
