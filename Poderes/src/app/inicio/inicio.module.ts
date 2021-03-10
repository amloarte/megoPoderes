import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { LoginComponent } from './login/login.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar_password.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    PerfilesComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class InicioModule { }
