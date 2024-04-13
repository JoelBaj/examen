import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoetryRoutingModule } from './poetry-routing.module';
import { SelectoresComponent } from './pages/selectores/selectores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutorComponent } from './pages/autor/autor.component';
import { TituloComponent } from './pages/titulo/titulo.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { ListadoComponent } from './components/listado/listado.component';

@NgModule({
  declarations: [
    SelectoresComponent,
    AutorComponent,
    SelectoresComponent,
    TituloComponent,
    ObrasComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PoetryRoutingModule,
    ReactiveFormsModule
  ]
})
export class PoetryModule { }
