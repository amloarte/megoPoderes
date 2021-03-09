import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from './../_services/catalogos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  selectedValue: string;
  paises: [] = [];
  provincias: [] = [];
  fomularioRegistro: FormGroup;
  oficinas: [] = [];
  select = new FormControl('', Validators.required);


  constructor(
    private formBuilder: FormBuilder,
    private serviceCatalogos: CatalogosService
  ) { }

  ngOnInit(): void {
    this.fomularioRegistro = this.formBuilder.group({
      paises: new FormControl(this.paises, Validators.required)
    });

    this.selectCascada('paises', '0');
    this.getCatalogos('oficina', '0');
    this.getCatalogos('oficina', '0');

    this.serviceCatalogos.getParametros('FACULTADES_PODERES').then((resp) => {
      console.log(resp);
    });
  }


  selectCascada(nombre: string, filtro: string) {
    this.serviceCatalogos.getCatalogos(nombre, filtro).then((resp: []) => {
      console.log(resp);
      this.paises = resp;
    });
  }

  getCatalogos(nombre: string, filtro: string) {
    this.serviceCatalogos.getCatalogos(nombre, filtro)
      .then((resp: []) => {
        this.oficinas = resp;
    });
  }


}
