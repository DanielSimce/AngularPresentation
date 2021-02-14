import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../Models/Genres';
import { Movie } from '../Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://localhost:44382/api/movie';


  constructor(private http: HttpClient){ }

  saveMovie(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.baseUrl, movie);
  }

  updateMovie(movie: Movie): Observable<Movie>{
    return this.http.put<Movie>(this.baseUrl, movie);
  }

  allMOvies(): Observable<Movie[]>{
   return  this.http.get<Movie[]>(this.baseUrl);
  }

  movieById(id: number): Observable<Movie>{
    return this.http.get<Movie>(this.baseUrl + '/' + id);
  }

  deleteById(id: number): Observable<Movie>{
    return this.http.delete<Movie>(this.baseUrl + '/' + id);
  }

  rent(id: number, movie: Movie): Observable<Movie>{
    return this.http.post<Movie>('https://localhost:44382/api/movie/rent/' + id, movie);
  }

  add(id: number, movie: Movie): Observable<Movie>{
    return this.http.post<Movie>('https://localhost:44382/api/movie/add/' + id, movie);
  }

  allGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>('https://localhost:44382/api/movie/genres');
  }

  genreById(id: number): Observable<Genre>{
    return this.http.get<Genre>('https://localhost:44382/api/movie/genres/' + id);
  }



}
