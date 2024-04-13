import { Component, OnInit } from '@angular/core';
import { PoetryService } from '../../services/poetry.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Poetry } from '../../interfaces/poetry,interfaces';
import { tap, switchMap, Observable } from 'rxjs';


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

  constructor(private fb: FormBuilder,
    private poetryser: PoetryService) { }
   
    // poetry = new Observable<Poetry[]>();
    
    // authors = new Observable<Poetry[]>();
    // title = new Observable<Poetry[]>();

  poetry:Poetry [] = [];
  authors: string[] = [];
  title: string[] = [];
  cargando: boolean = false;
  
  ngOnInit(): void {
    

    // this.poetryser.getAutores('autor').subscribe((poetry)=>{
    //   this.poetry = poetry
    //   console.log(this.poetry)
    // });
    
    
 

  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
