import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_SERVICIOS, ID_SISTEMA, TERMINAL } from '../../config/config';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  usuario: Usuario;
  validacion: number;
  loginUser: Login;

  constructor(
    private http: HttpClient,
    private route: Router)
  {
    this.cargarStorange();
  }

  guardarStorange( usuario: Usuario): void {
    localStorage.clear();
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
  }

  cargarStorange(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  login( usuario: string, contrasenia: string ){

    this.loginUser = {
      login: usuario,
      password: contrasenia,
      id_sistema: ID_SISTEMA,
      terminal: TERMINAL
    };

    const url = URL_SERVICIOS + '/api/login/autentificar';

    return new Promise((resolve, reject) => {

      this.http.post(url, this.loginUser)

        .subscribe( ( respuesta: any) => {

          if (respuesta.T !== null){

            this.guardarStorange(respuesta.T);

            if ( respuesta.T.id_perfil === 0){

              resolve(respuesta);

            } else {

              this.validarHorario( respuesta.T.id_perfil ).then((resp) => {

                if (resp) {

                  resolve(respuesta);

                } else {

                  localStorage.clear();
                  alert('Fuera de horario');

                }
              });
            }

          }else{

            resolve(respuesta);
            localStorage.clear();

          }
        }, reject);
      });
  }


  logOut( ): void{
    const usuarioId  = this.usuario.id_usuario;
    const url = URL_SERVICIOS + '/api/login/cerrar_session';
    const data = { id_usuario: usuarioId, id_sistema: ID_SISTEMA};

    this.http.post(url, data)
      .subscribe(resp => {
        localStorage.clear();
        this.route.navigate(['/login']);
      });
  }

  validarHorario(perfilID: number ): Promise<boolean> {

    const url = URL_SERVICIOS + '/api/login/verificar_horario';

    let params = new HttpParams();
    params = params.set('id_usuario', this.usuario.id_usuario.toString());
    params = params.set('id_sistema', ID_SISTEMA.toString());
    params = params.set('id_perfil', perfilID.toString());

    return new Promise( (resolve, reject) => {

      this.http.get(url, { params })

        .subscribe(resp => {

          if (resp === 0) {

            resolve(false);

          } else {

            resolve(true);

          }
        }, reject);
    });
  }
}
