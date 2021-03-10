import { Funcionalidades } from './../../models/funcionalidades';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { SidebarService, LoginService } from '../../services/service.index';
import { NOMBRE_SISTEMA } from '../../config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})

export class SidebarComponent implements OnInit {
  subMenu = false;

  // subMenu: any = {
  //   mostrar: false,
  //   class: 'active'
  // };

  usuario: Usuario;
  funcionalidadPadre: Funcionalidades;
  nombreSistema: string =  NOMBRE_SISTEMA;
  perId: number;

  constructor(
    private sidebarService: SidebarService,
    private usuarioService: LoginService,
    private route: Router
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void{
    this.perId = this.usuario.id_perfil;
    this.obtenerMenu(this.perId);
  }

  obtenerMenu( perfilId: number): void {

    this.sidebarService.get_funcionalidadesPadre(perfilId)
      .then((resp: any) => {

        this.funcionalidadPadre = resp;
        localStorage.setItem( 'menu', JSON.stringify(this.funcionalidadPadre));

        if ( resp.length === 0 ){

          localStorage.clear();
          this.route.navigate(['/login']);

        }else{

          this.route.navigate(['/inicio']);

        }

      }).catch(err => {

        alert('Error al obtener funcionalidades asignadas');
        this.route.navigate(['/login']);
        console.warn(err);

      });
  }
}
