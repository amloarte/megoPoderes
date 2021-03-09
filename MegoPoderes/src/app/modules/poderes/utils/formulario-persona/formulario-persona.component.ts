import { PoderesService } from './../../_services/poderes.service';
import { Persona } from './../../../../models/persona.models';
import { Validators, FormControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit {

  // personas: Persona[] = [];
  formPersonas: FormGroup;

  personas: Persona = {
    cedula: '',
    nombres: '',
    correo: '',
    direccion: '',
    celular: 0,
    telefono: 0,
    numCasa: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private servicePoderes: PoderesService,
  ) { }

  ngOnInit() {
    this.formPersonas = this.formBuilder.group({
      datosPersona: new FormArray([this.addFormPersonas()]),
    });
    // console.log(this.formPersonas);
  }

  addFormPersonas() {
    return this.formBuilder.group({
      cedula: new FormControl('', [
        Validators.required,
        // Validators.min(10),
        // Validators.max(13),
        // Validators.minLength(10),
        // Validators.maxLength(13),
        // Validators.pattern('^[0-9]{5}$')
      ]),
      nombres: new FormControl('', [
        // Validators.required,
        // Validators.maxLength(150),
      ]),
      correo: new FormControl('', [
        // Validators.required,
        // Validators.email,
      ]),
      telefono: new FormControl('', [
        // Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(150),
        // Validators.pattern('^[0-9]{5}$')
      ]),
      direccion: new FormControl('', [
        // Validators.required,
        // Validators.maxLength(150),
      ]),
    });
  }

  get datosPersonaArray() {
    return this.formPersonas.get('datosPersona') as FormArray;
  }

  buscarSocio(cedula: string) {

    if (cedula.length >= 10) {
      this.servicePoderes.getInfoCliente(cedula)
        .then((resp: Persona[]) => {
          this.personas = resp[0];
          console.log(this.personas);
        });
    }

  }

  nuevoFormularioPersona() {

    // this.personas = {
    //   cedula: '',
    //   nombres: '',
    //   correo: '',
    //   direccion: '',
    //   celular: 0,
    //   telefono: 0,
    //   numCasa: '',
    // };

    this.datosPersonaArray.push(this.addFormPersonas());
  }

  eliminarFormularioPersona(index) {
    this.datosPersonaArray.removeAt(index);
  }
}
