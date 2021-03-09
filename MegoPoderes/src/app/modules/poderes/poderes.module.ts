import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registrarPoder/registro.component';
import { Routes, RouterModule } from '@angular/router';
import { PoderesComponent } from './poderes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionComponent } from './administracion/administracion.component';
import { ValidacionComponent } from './validacion/validacion.component';

/* Angular Material */
// Popups & modals

import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { FormularioPersonaComponent } from './utils/formulario-persona/formulario-persona.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import {
  MatRippleModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';


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
  declarations: [
    RegistroComponent,
    AdministracionComponent,
    ValidacionComponent,
    FormularioPersonaComponent
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  imports: [
    CommonModule,
    // Modules Material
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatListModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatDividerModule,
    MatSortModule,
    MatStepperModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRippleModule,
    MatRadioModule,


    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule]
})
export class PoderesModule { }
