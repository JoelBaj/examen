import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Poetry } from '../interfaces/poetry,interfaces';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  private apiUrl: string = environment.baseUrl;
  private _autores: string[] = [];

  get regiones(): string[] { 
    return [...this._autores];
  }
  
  constructor(private http: HttpClient) { }
  // https://poetrydb.org/author
  //https://poetrydb.org/author,title/Shakespeare;Sonnet
  
  getAutores(): Observable<Poetry[]> {
    const URL = `${this.apiUrl}/author`;
    return this.http.get<Poetry[]>(URL);
  }

 
  getTitulosPorAutor(autor: string): Observable<Poetry[]> {
    const URL = `${this.apiUrl}/author/${autor}/title`;
    return this.http.get<Poetry[]>(URL);
  }

  
  getDetalleObra(titulo: string): Observable<Poetry[]> {
    const URL = `${this.apiUrl}/title/${titulo}`;
    return this.http.get<Poetry[]>(URL);
  }
  
}
