import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Paciente } from '../model/paciente';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService implements IService<Paciente> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + "/paciente/";

  get(termoBusca?: string | undefined): Observable<Paciente[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += "busca/" + termoBusca;
    }
    return this.http.get<Paciente[]>(url);
  }
  
  getById(id: number): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }

  save(objeto: Paciente): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
