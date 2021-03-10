import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Funcionalidad1Component } from './funcionalidad1/funcionalidad1.component';

const pagesRoutes: Routes = [
    {
        path: 'inicio',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    { path: 'inicio',               component: DashboardComponent       },
    { path: 'crear-poder',          component: Funcionalidad1Component  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
