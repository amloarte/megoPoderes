import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CatalogosService } from './../_services/catalogos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  @Input() oficina: number;
  @Input() titular: [];
  @Input() beneficiario: [];
  @Input() facultades: [];
  @Input() fechasPoderes: [];

  fomularioRegistro: FormGroup;
  instituciones: [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private serviceCatalogos: CatalogosService
  ) { }

  ngOnInit(): void {
    this.formularioRegistro();
    this.getParametros('INSTITUCIONES');
  }

  formularioRegistro(): FormGroup {
    return this.fomularioRegistro = this.formBuilder.group({
      
    });
  }

  getParametros(nombre: string) {
    this.serviceCatalogos.getParametros(nombre)
      .then((resp: []) => {
        this.instituciones = resp;
    });
  }

  registrarPoder() {}

}
