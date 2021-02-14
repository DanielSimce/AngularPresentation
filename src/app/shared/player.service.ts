import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../Models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl = 'https://localhost:44382/api/player';

  constructor(private http: HttpClient){ }


  savePlayer(player: Player): Observable<Player>{
    return this.http.post<Player>(this.baseUrl, player);
  }

  updatePlayer(player: Player): Observable<Player>{
    return this.http.put<Player>(this.baseUrl, player);
  }

  allPlayers(): Observable<Player[]>{
   return  this.http.get<Player[]>(this.baseUrl);
  }

  playerById(id: number): Observable<Player>{
    return this.http.get<Player>(this.baseUrl + '/' + id);
  }

  deleteById(id: number): Observable<Player>{
    return this.http.delete<Player>(this.baseUrl + '/' + id);
  }




}
