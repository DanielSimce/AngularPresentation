import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams } from '../Models/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  baseUrl = 'https://localhost:44382/api/teams';

  constructor(private http: HttpClient){ }


  saveTeam(team: Teams): Observable<Teams>{
    return this.http.post<Teams>(this.baseUrl, team);
  }

  updateTeam(team: Teams): Observable<Teams>{
    return this.http.put<Teams>(this.baseUrl, team);
  }

  allTeams(): Observable<Teams[]>{
   return  this.http.get<Teams[]>(this.baseUrl);
  }

  teamById(id: number): Observable<Teams>{
    return this.http.get<Teams>(this.baseUrl + '/' + id);
  }

  deleteById(id: number): Observable<Teams>{
    return this.http.delete<Teams>(this.baseUrl + '/' + id);
  }


}
