import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Autor } from '../interfaces/autor';
import { Obras } from '../interfaces/obras';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  private urlApi: string = environment.baseUrl;
  private _autores: string[] = [];


  
  constructor(private http: HttpClient) { }
  // https://poetrydb.org/author
  //https://poetrydb.org/author,title/Shakespeare;Sonnet
  
  getAutor(): Observable<Autor>{
    return this.http.get<Autor>(`${this.urlApi}/author`)
  }

  getObrasAutor(nombre: string): Observable<Obras[]>{
    return this.http.get<Obras[]>(`${this.urlApi}/author/${nombre}`)
  }
  
}
