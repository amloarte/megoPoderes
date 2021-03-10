import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_ALFRESCO } from './../../config/config';
import { Documento } from './../../models/documento';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlfrescoService {

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  getDocumentos( str_id_documento: string  ): void {

    const url = URL_ALFRESCO + '/api/documento/get_documento';
    this.http.post(url, str_id_documento)
        .pipe(map( (resp: Documento) => {
          return resp;
        }));
  }

  addDocumento( documento: Documento  ): void {
    console.log( documento );
  }

}
