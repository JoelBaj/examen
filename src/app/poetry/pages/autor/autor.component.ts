import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PoetryService } from '../../services/poetry.service';
import { Autor } from '../../interfaces/autor';
import { Obras } from '../../interfaces/obras';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  
  autores: Autor[] = [];
  obras: Obras[] = [];
  autorSeleccionado: string = '';

  constructor(private autoresService:PoetryService,private router:Router){}

  ngOnInit(): void {
     this.mostrarAutores();
  
  }
mostrarAutores() {
    this.autoresService.getAutor().subscribe({
      next: (data: Autor) => {
        if (data) {
          this.autores = data.authors.map(author => ({ authors: [author] }));
        }
      },
    
    });
  }
  mostrarObrasAutor(nombreAutor: string) {
    if (nombreAutor === this.autorSeleccionado) {
      this.autorSeleccionado = '';
      this.obras = [];
    } else {
      this.autorSeleccionado = nombreAutor;
      this.autoresService.getObrasAutor(nombreAutor).subscribe({
        next: (data: Obras[]) => {
          if (data) {
            this.obras = data;
          }
        }
      });
      console.log(this.obras);
      
    }
  }
}
