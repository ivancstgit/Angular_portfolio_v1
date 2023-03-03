import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://springboot-portfolio.onrender.com/';

  constructor(private httpClient: HttpClient) { }

  public listaPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + 'persona/lista');
  }

  public detailPersonas(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `persona/detail/${id}`);
  }

  public savePersonas(Persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'persona/create', Persona);
  }

  public updatePersonas(id: number, Persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `persona/update/${id}`, Persona);
  }

  public deletePersonas(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `persona/delete/${id}`);
  }

  
  public listaPortfolio(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL +'portfolio/lista');
  }
  
}
