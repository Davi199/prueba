import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

//Own
//Constant
import { API_URL } from '@app/common/constant/app';
//Types
import { Persona } from '@app/common/types/clases/Persona'

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private endPoint = `${API_URL}/personas`;
  constructor(private http:HttpClient) { }

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.endPoint, httpOptions);
  }

  getPersonaById(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.endPoint}/${id}`, httpOptions);
  }

  createPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(`${this.endPoint}`, persona, httpOptions);
  }

  updatePersona(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.endPoint}/${persona.id}`, persona, httpOptions);
  }

  deletePersona(persona:Persona):Observable<void>{
    return this.http.delete<void>(`${this.endPoint}/${persona.id}`, httpOptions);
  }
  
}
