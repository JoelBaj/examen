import { Component } from '@angular/core';

interface MenuItem{
  texto:string;
  ruta:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor() { }
  Menu:MenuItem[] =[
    {texto:'Autores', ruta:'/poetry/autor'},
    {texto:'Favoritos', ruta:'/poetry/favoritos'},
    
  ]
}
