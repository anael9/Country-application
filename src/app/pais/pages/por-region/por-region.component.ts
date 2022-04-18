import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }`
  ]
})

export class PorRegionComponent {

  regiones: string[] = ['africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActviva: string = '';

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCss( region: string): string {
    return (region === this.regionActviva ? 'btn btn-primary' : 'btn btn-outline-primary');
  }

  activarRegion( region: string) {
    if ( region === this.regionActviva) { return; }
    this.regionActviva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
        .subscribe( paises => this.paises = paises)
  }
}
