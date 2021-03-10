import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_SERVICIOS, ID_SISTEMA } from '../../config/config';
import { Usuario } from '../../models/usuario';
import { LoginService } from './login.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {

  usuario: Usuario;

  constructor(
    private http: HttpClient,
    private usuarioService: LoginService
  )
  {
    this.usuario = this.usuarioService.usuario;
  }

  obtenerPerfiles(): Promise<void>{

    const url = URL_SERVICIOS + '/api/perfiles/get_asignados';

    let params = new HttpParams();
    params = params.set('id_usuario', this.usuario.id_usuario.toString());
    params = params.set('id_sistema', ID_SISTEMA.toString());

    return new Promise ( (resolve, reject) => {
      this.http.get(url, { params })
        .subscribe ( (resp: any) => {
          resolve(resp);
        }, (err) => {
          alert('Ocurrio un error');
          console.warn(err);
        });
    });
  }
}
