import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Poetry } from '../../interfaces/poetry,interfaces';
import { PoetryService } from '../../services/poetry.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  
  autores: Poetry[] = [];
  constructor(private poetryService:PoetryService){}

  ngOnInit(): void {
    this.poetryService.getAutores()
    .subscribe(autores=>{
      this.autores = autores;
      console.log(this.autores)
    })
  }

}
