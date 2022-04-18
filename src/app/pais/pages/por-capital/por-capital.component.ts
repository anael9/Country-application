import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {
  termino: string = '';
  hayError: boolean = false;
  capital: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital( this.termino )
    .subscribe ( ( capital ) => {  
      console.log(capital);
        
      this.capital = capital;
    }, (err) => {
      this.hayError = true;
      this.capital = [];
    });
  }

  sugerencia( termino: string ) {
    this.hayError = false;
  }
  

}
