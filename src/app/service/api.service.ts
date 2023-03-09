import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { IPortfolio } from '../models/IPortfolio';
import { IAbout } from '../models/IAbout';
import { IContact } from '../models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://springboot-portfolio.onrender.com/';

  constructor(private httpClient: HttpClient) { }

  // Personas
  public listaPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + 'persona/lista');
  }
  //este no se repite
  public detailPersonas(id: string): Observable<Persona> {
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

  //proyecto

  //cambiar a listaProyect
  public listaPortfolio(): Observable<IPortfolio[]> {
    return this.httpClient.get<IPortfolio[]>(this.URL +'portfolio/lista');
  }
  public listaPortfolioByType(type:string): Observable<IPortfolio[]> {
    return this.httpClient.get<IPortfolio[]>(this.URL +'portfolio/detail/'+ type);
  }
  public listaPortfolioById(id: string): Observable<IPortfolio> {
    return this.httpClient.get<IPortfolio>(this.URL +'portfolio/get/'+ id);
  }

  public savePortfolio(portfolio: IPortfolio): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'portfolio/create', portfolio);
  }

  public updatePortfolio(id: string, portfolio: IPortfolio): Observable<any> {
    return this.httpClient.put<any>(this.URL + "portfolio/update/" + id, portfolio);
  }

  public deletePortfolio(id: string | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.URL + "portfolio/delete/"+id);
  }

//about
  public listaAbout():Observable<IAbout[]>{
    return this.httpClient.get<IAbout[]>(this.URL +'about/lista');
  }
  public saveAbout(about: IAbout): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'about/create', about);
  }

  public updateAbout(id: string, about: IAbout): Observable<any> {
    return this.httpClient.put<any>(this.URL + "about/update/" + id, about);
  }

  public deleteAbout(id: string | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.URL + "about/delete/" + id);
  }
  public listaAboutById(id: string): Observable<IAbout> {
    return this.httpClient.get<IAbout>(this.URL +'about/detail/'+ id);
  }

  //contact
  public listaContact():Observable<IContact[]>{
    return this.httpClient.get<IContact[]>(this.URL +'contact/lista');
  }
  public saveContact(contact: IContact): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'contact/create', contact);
  }

  public updateContact(id: string, contact: IContact): Observable<any> {
    return this.httpClient.put<any>(this.URL + "contact/update/" + id, contact);
  }

  public deleteContact(id: string | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.URL + "contact/delete/" + id);
  }
  
  public listaContactById(id: string): Observable<IContact> {
    return this.httpClient.get<IContact>(this.URL +'contact/detail/'+ id);
  }
}
