import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';

// modulos personalizados
import { SharedModule } from '../shared/shared.module';

// PAGINAS 
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Funcionalidad1Component } from './funcionalidad1/funcionalidad1.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Funcionalidad1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
  ],
  exports:[
  ],
  providers:[
  ]

})
export class PagesModule { }
