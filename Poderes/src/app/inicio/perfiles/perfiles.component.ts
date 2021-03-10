import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { PerfilesService, LoginService, SidebarService } from '../../services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styles: []
})
export class PerfilesComponent implements OnInit {

  usuario: Usuario;
  perfiles = [];

  constructor(
    private _perfiles: PerfilesService,
    private _usuario: LoginService,
    private _route: Router
  ) {

    this.usuario = _usuario.usuario;
    this.perfilesUsuario();
  }

  ngOnInit(): void {
    this.perfilesUsuario();
  }

  perfilesUsuario(): void {
    this._perfiles.obtenerPerfiles()
      .then( (resp: any) => {

        this.perfiles = resp;

      }).catch(err => {

        alert('Ocurrio un error. Ingrese de nuevo');
        console.log(err);
        this._route.navigate(['/login']);

      });
  }

  irPaginaPrincipal( funcionalidad ): void {

    this._usuario.validarHorario(funcionalidad.per_id)
      .then(resp => {

        if ( resp === true ){

          this.usuario.id_perfil = funcionalidad.per_id;
          this.usuario.nombre_perfil = funcionalidad.per_nombre;

          localStorage.removeItem('usuario');
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
          this._route.navigate(['/inicio']);

        }else {

          alert('No puede ingresar con el perfil de ' + funcionalidad.per_nombre + ' fuera de horario');

        }

      }).catch( err => {

          alert('Ocurrio un error. Ingrese De nuevo');
          console.log(err);
          this._route.navigate(['/login']);

      });
  }
}
