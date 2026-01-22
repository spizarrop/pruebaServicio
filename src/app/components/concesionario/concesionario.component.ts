import { Component } from '@angular/core';
import { ConcesionarioService } from 'src/app/services/concesionario.service';
import { Coche } from './coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent{

  public listaCoches: Coche[] = [];
  marca: string = '';
  modelo: string = '';
  precio: number = 0;

  cocheEditando: Coche | any = null;
  mostrarPopup: boolean = false;
  editMarca: string = '';
  editModelo: string = '';
  editPrecio: number = 0;

  constructor(private concesionario: ConcesionarioService){}

  ngOnInit(){
    this.listaCoches = this.concesionario.getCoches();
  }

  agregarCoche(){
    if(this.marca?.length>2 && this.precio > 500){
      this.concesionario.agregarCoche(this.marca,this.modelo,this.precio);
      this.marca = '';
      this.modelo = '';
      this.precio = 0;
    }
  }

  eliminarCoche(id: number) {
    this.concesionario.eliminarCoche(id);
    this.listaCoches = this.concesionario.getCoches();
  }

  abrirPopup(coche: Coche) {
    this.cocheEditando = coche;
    this.editMarca = coche.marca;
    this.editModelo = coche.modelo;
    this.editPrecio = coche.precio;
    this.mostrarPopup = true;
  }

  confirmarModificacion() {
    this.cocheEditando.marca = this.editMarca;
    this.cocheEditando.modelo = this.editModelo;
    this.cocheEditando.precio = this.editPrecio;
    
    this.concesionario.modificarCoche(this.cocheEditando);
    this.listaCoches = this.concesionario.getCoches();
    this.cerrarPopup();
  }

  cerrarPopup() {
    this.mostrarPopup = false;
    this.cocheEditando = null;
  }
}
