import { RegistroComponent } from './registrarPoder/registro.component';
import { Routes, RouterModule } from '@angular/router';
import { PoderesComponent } from './poderes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionComponent } from './administracion/administracion.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValidacionComponent } from './validacion/validacion.component';

const routes: Routes = [
  {
    path: '',
    component: PoderesComponent,
    children: [
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'administracion',
        component: AdministracionComponent,
      },
      {
        path: 'verificar-poder',
        component: ValidacionComponent,
      },
      {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'error/404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [RegistroComponent, AdministracionComponent, ValidacionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule
  ],
  exports: [RouterModule]
})
export class PoderesModule { }
