import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { MainPageComponent } from '../main-page/main-page.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  @Input() personajes:Personaje[] = [];
  
  @Input() nuevo: Personaje = {
    nombre:'',
    poder: 0,
  }
  


  agregar() {
    
    if (this.nuevo.nombre.trim().length === 0) { return; }
    console.log(this.nuevo);
        this.personajes.push({
          nombre: this.nuevo.nombre,
          poder: this.nuevo.poder
        });

        this.nuevo = {
          nombre: '',
          poder: 0
        }
    console.log(this.personajes);
  }
  
}
