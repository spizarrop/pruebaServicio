import { Component } from '@angular/core';
import { ConcesionarioService } from 'src/app/services/concesionario.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent{

  public listaCoches: any[] = [];

  constructor(private concesionario: ConcesionarioService){}

  ngOnInit(){
    this.listaCoches = this.concesionario.getCoches();
  }

}
