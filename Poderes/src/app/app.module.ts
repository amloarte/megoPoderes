import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// MODULOS DEL SISTEMA
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { InicioModule } from './inicio/inicio.module';
import { APP_ROUTES } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { LoginAdwarePipe } from './pipes/login-adware.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginAdwarePipe,
  ],
  imports: [
    BrowserModule,
    InicioModule,
    SharedModule,
    APP_ROUTES,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
