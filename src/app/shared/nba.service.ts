import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nba } from '../Models/nba';

@Injectable({
  providedIn: 'root'
})
export class NbaService {



  baseUrl = 'https://localhost:44382/api/nba';

  constructor(private http: HttpClient){ }

  savePlayer(player: Nba): Observable<Nba>{
    return this.http.post<Nba>(this.baseUrl, player);
  }

  updatePlayer(player: Nba): Observable<Nba>{
    return this.http.put<Nba>(this.baseUrl, player);
  }

  allPlayers(): Observable<Nba[]>{
   return  this.http.get<Nba[]>(this.baseUrl);
  }

  playerById(id: number): Observable<Nba>{
    return this.http.get<Nba>(this.baseUrl + '/' + id);
  }

  deleteById(id: number): Observable<Nba>{
    return this.http.delete<Nba>(this.baseUrl + '/' + id);
  }


}
