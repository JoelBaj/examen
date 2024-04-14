import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectoresComponent } from './pages/selectores/selectores.component';
import { AutorComponent } from './pages/autor/autor.component';
import { TituloComponent } from './pages/titulo/titulo.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'autor', component: AutorComponent},
      {path:'obra', component: ObrasComponent},
      {path:'selector', component: SelectoresComponent},
      {path:'favoritos', component: FavoritosComponent},
      {path:'**', redirectTo: 'autor'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoetryRoutingModule { }
