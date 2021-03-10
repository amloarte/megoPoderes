import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  LoginService,
  SidebarService,
  PerfilesService,
  AlfrescoService
} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    LoginService,
    SidebarService,
    PerfilesService,
    AlfrescoService
  ]
})
export class ServiceModule { }
