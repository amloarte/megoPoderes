import { RespuestaTransaccion } from './../../../models/RespuestaTransaccion.models';
import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { URL_PODERES } from '../../../configs/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  getCatalogos(nombre: string, filtro: string ) {

    const url = URL_PODERES + '/api/getCatalogos';

    let params = new HttpParams();
    params = params.set('str_nombre_catalogo', nombre);
    params = params.set('str_filtro', filtro);

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


  getParametros(nombre: string ) {

    const url = URL_PODERES + '/api/getParametros';

    let params = new HttpParams();
    params = params.set('str_nombre_parametro', nombre);

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
