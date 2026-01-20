import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/concesionario.service';

@Component({
  selector: 'app-producto',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ProductoComponent{

  constructor(producto: ProductoService){
    
  }
}
