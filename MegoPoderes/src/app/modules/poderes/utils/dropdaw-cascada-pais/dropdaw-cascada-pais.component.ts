import { Pais } from './../../../../models/pais.models';
// import { Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../_services/catalogos.service';

@Component({
  selector: 'app-dropdaw-cascada-pais',
  templateUrl: './dropdaw-cascada-pais.component.html',
  styleUrls: ['./dropdaw-cascada-pais.component.scss']
})
export class DropdawCascadaPaisComponent implements OnInit {
  paises: {};
  selectPaises = '1';
  selectProvincias: number;
  provincias: {};

  constructor(
    private serviceCatalogos: CatalogosService,
  ) { }

  ngOnInit(): void {
    this.selectCascada('paises', '0');
    this.selectCascada('provincia', this.selectPaises.toString());
  }

  selectCascada(nombre: string, filtro: string) {
    console.log(nombre);
    console.log(filtro);

    this.serviceCatalogos.getCatalogos(nombre, filtro).then((resp: []) => {
      if (nombre == 'paises') {
        this.paises = resp;
      } else  if( nombre == 'provincia' ) {
        this.provincias = resp;
      }
    });

  }
}
