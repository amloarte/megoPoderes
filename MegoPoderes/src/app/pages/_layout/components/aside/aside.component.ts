import { Router } from '@angular/router';
import { LoginService } from './../../../../modules/auth/_services/login.service';
import { Funcionalidades } from './../../../../_theme/core/models/menu.model';
import { Usuario } from './../../../../modules/auth/_models/usuario.model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../_theme/core';
import { SidebarService } from 'src/app/_theme/core/services/sidebar.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  usuario: Usuario;
  funcionalidadPadre: Funcionalidades;
  perId: number;
  disableAsideSelfDisplay: boolean;
  headerLogo: string;
  brandSkin: string;
  ulCSSClasses: string;
  location: Location;
  asideMenuHTMLAttributes: any = {};
  asideMenuCSSClasses: string;
  asideMenuDropdown;
  brandClasses: string;
  asideMenuScroll = 1;
  asideSelfMinimizeToggle = false;

  constructor(
    private layout: LayoutService,
    private loc: Location,
    private sidebarService: SidebarService,
    private usuarioService: LoginService,
    private route: Router
  ) {
    this.usuario = this.usuarioService.usuario;
    this.perId = this.usuario.id_perfil;
    this.obtenerMenu(this.perId);
  }

  ngOnInit(): void {

    this.headerLogo = this.getLogo();
    // load view settings
    this.disableAsideSelfDisplay = this.layout.getProp('aside.self.display') === false;
    this.brandSkin = this.layout.getProp('brand.self.theme');
    this.ulCSSClasses = this.layout.getProp('aside_menu_nav');
    this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu');
    this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu');
    this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0';
    this.brandClasses = this.layout.getProp('brand');
    this.asideSelfMinimizeToggle = this.layout.getProp(
      'aside.self.minimize.toggle'
    );
    this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0;
    // this.asideMenuCSSClasses = `${this.asideMenuCSSClasses} ${this.asideMenuScroll === 1 ? 'scroll my-4 ps ps--active-y' : ''}`;
    // Routing
    this.location = this.loc;
    // console.log(this.location);
  }

  private getLogo() {
    if (this.brandSkin === 'light') {
      return './assets/media/logos/logo-dark.png';
    } else {
      return './assets/media/logos/logo-light.png';
    }
  }

  obtenerMenu( perfilId: number): void {

    this.sidebarService.get_funcionalidadesPadre(perfilId)
      .then((resp: any) => {

        this.funcionalidadPadre = resp;

        localStorage.setItem( 'menu', JSON.stringify(this.funcionalidadPadre));

        if (resp.length === 0) {

          localStorage.clear();
          this.route.navigate(['/auth/login']);

        }else{

          this.route.navigate(['/dashboard']);

        }

      }).catch(err => {

        alert('Error al obtener funcionalidades asignadas');
        this.route.navigate(['/auth/login']);
        console.warn(err);

      });
  }
}
