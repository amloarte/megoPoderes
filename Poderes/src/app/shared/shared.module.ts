import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTES PERSONALIZADOS
import { HeaderComponent } from './header/header.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PagenofoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    PagenofoundComponent
  ]
})
export class SharedModule { }
