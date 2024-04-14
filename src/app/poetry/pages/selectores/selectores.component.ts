import { Component, OnInit } from '@angular/core';
import { PoetryService } from '../../services/poetry.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { tap, switchMap, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Autor } from '../../interfaces/autor';
import { Obras } from '../../interfaces/obras';


@Component({
  selector: 'app-selectores',
  templateUrl: './selectores.component.html',
  styleUrls: ['./selectores.component.css']
})
export class SelectoresComponent implements OnInit {
  
  miFormulario: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    autor: ['', [Validators.required]],
    obra: ['', [Validators.required]],
  });
  autores: Autor[] = [];
  obras: Obras[] = [];
  autorSeleccionado: string = '';
  constructor(private fb: FormBuilder,
    private poetryser: PoetryService,private router:Router){}

  ngOnInit(): void {
     this.mostrarAutores();
  
  }
mostrarAutores() {
    this.poetryser.getAutor().subscribe({
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
      this.poetryser.getObrasAutor(nombreAutor).subscribe({
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
