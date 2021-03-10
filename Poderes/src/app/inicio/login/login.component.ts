import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta } from '../../models/Respuesta';
import { LoginService } from '../../services/service.index';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  respuesta: Respuesta;
  mensajeError = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.clear();
   }

  async login(fLogin: NgForm): Promise<void>{

    if (fLogin.invalid) { return; }

    const pass = SparkMD5.hash( fLogin.value.password );

    this.loginService.login( fLogin.value.usuario, pass  )
      .then((resp: any) => {

        this.respuesta = resp;
        this.validarLogin(this.respuesta.codigo, this.respuesta.mensajes );

      }).catch(err => {

        this.mensajeError = 'Actualmente no puede ingresar al sistema. Intente mas tarde';
        console.log(err);

      });
  }

  validarLogin(codigo: string, mensajes: Array<string>): void {
    let mensajeLogin: string;
    let mensajeCaducaPassword: string;

    switch (codigo) {
      case 'L1': {

        if ( mensajes.length > 1 ){
          mensajeCaducaPassword = mensajes[0];
          mensajeLogin = mensajes[1];
          alert(mensajeCaducaPassword);
        } else {
          mensajeLogin = mensajes[0];
        }

        const splitLogLogin = mensajeLogin.split('|');
        const mensajeLogLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(mensajeLogLogin);

        this.router.navigate(['/inicio']);
        break;

      }
      case 'L2': {
        alert(mensajes);
        alert('Contraseña Caducada');
        break;
      }
      case 'L3': {

        if ( mensajes.length > 1 ){
          mensajeCaducaPassword = mensajes[0];
          mensajeLogin = mensajes[1];
          alert(mensajeCaducaPassword);
        } else {
          mensajeLogin = mensajes[0];
        }

        const splitLogLogin = mensajeLogin.split('|');
        const mensajeLogLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(mensajeLogLogin);

        this.router.navigate(['/inicio']);
        break;
      }
      case 'L4': {

        if ( mensajes.length > 1 ){
          mensajeCaducaPassword = mensajes[0];
          mensajeLogin = mensajes[1];
          alert(mensajeCaducaPassword);
        } else {
          mensajeLogin = mensajes[0];
        }

        const splitLogLogin = mensajeLogin.split('|');
        const log = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(log);

        this.router.navigate(['/perfiles']);
        break;

      }
      case 'L5': {

        this.mensajeError = mensajes[0];
        break;

      }
      case 'L6': {

        this.mensajeError = mensajes[0];
        break;

      }
      default: {
        break;
      }
    }
  }
}
