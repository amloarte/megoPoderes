import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './inicio/login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { RecuperarPasswordComponent } from './inicio/recuperar-password/recuperar_password.component';
import { PerfilesComponent } from './inicio/perfiles/perfiles.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PagesComponent,
        loadChildren: () => PagesModule,
    },
    { path: 'login',              component: LoginComponent },
    { path: 'recuperar_password', component: RecuperarPasswordComponent },
    { path: 'perfiles',           component: PerfilesComponent },
    { path: '**',                 component: PagenofoundComponent },

];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
