export class Persona {

  constructor(
    nombres: string,
    direccion: string,
    numCasa: string,
    telefono: number,
    celular: number,
    cedula: string,
    correo: string,

  ) {

    this.nombres = nombres;
    this.direccion = direccion;
    this.numCasa = numCasa;
    this.telefono = telefono;
    this.celular = celular;
    this.cedula = cedula;
    this.correo = correo;
  }

  nombres: string;
  direccion: string;
  numCasa: string;
  telefono: number;
  celular: number;
  cedula: string;
  correo: string;

}
