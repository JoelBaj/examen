import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectoresComponent } from './pages/selectores/selectores.component';
import { AutorComponent } from './pages/autor/autor.component';
import { TituloComponent } from './pages/titulo/titulo.component';
import { ObrasComponent } from './pages/obras/obras.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'autor', component: AutorComponent},
      {path:'titulo', component: TituloComponent},
      {path:'obra', component: ObrasComponent},
      {path:'favoritos', component: SelectoresComponent},
      {path:'**', redirectTo: 'autor'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoetryRoutingModule { }
