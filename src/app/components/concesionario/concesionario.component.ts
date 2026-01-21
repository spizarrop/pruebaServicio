import { Component } from '@angular/core';
import { ConcesionarioService } from 'src/app/services/concesionario.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent{

  public listaCoches: any[] = [];
  id: number = 0;
  marca: string = '';
  modelo: string = '';
  precio: number = 0;

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

  eliminarCoche(){
    this.concesionario.eliminarCoche(this.id);
  }

  modificarCoche(){
    this.concesionario.modificarCoche(this.id, this.marca,this.modelo,this.precio);
  }

}
