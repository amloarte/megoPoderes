import { RespuestaTransaccion } from './../../../models/RespuestaTransaccion.models';
import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { URL_PODERES } from './../../../_theme/configs/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoderesService {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }


  getInfoCliente(cedula: string) {

    const url = URL_PODERES + '/api/getInfoSocio';

    let params = new HttpParams();
    params = params.set('str_cedula', cedula);

    return new Promise( (resolve, reject) => {

      this.http.get(url, { params })

        .subscribe((resp: RespuestaTransaccion) => {

          if (resp.codigo === '0') {
            resolve(resp.cuerpo);
          } else {
            resolve(null);
          }

        }, reject);
    });


  }


}
