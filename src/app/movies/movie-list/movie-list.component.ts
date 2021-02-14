import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/Models/Genres';
import { Movie } from 'src/app/Models/Movie';
import { AuthService } from 'src/app/shared/auth.service';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[];
  genresList: Genre[];
  movie: string;
  p = 1;
  genre: number;
  constructor(private movieService: MoviesService, private router: Router, private authService: AuthService){ }

  ngOnInit(): void {
    this.allMovies();

    this.movieService.allGenres().subscribe(
      data => {
        this.genresList = data;
      }
    );


  }

  isAdmin(): boolean{
    return this.authService.currentUser.role === 'Admin' ? true : false;
  }

  allMovies(){
    this.movieService.allMOvies().subscribe(
      data => {
        this.movieList = data;
      }
    );
  }

  onRent(id: number, movie: Movie){
    this.movieService.rent(id, movie).subscribe(
      data => {
        this.allMovies();
       alert(`You rent ${data.name}`);

      }
    );
  }

  onReturn(id: number, movie: Movie){
    this.movieService.add(id, movie).subscribe(
      data => {
        this.allMovies();
        alert(`Movie Return To Database- ${data.name}`);
      }
    );
  }

  onDetail(id: number){
    this.router.navigate(['/detail', id]);
  }

  onDelete(id: number){
    this.movieService.deleteById(id).subscribe(
      data => {
        console.log(data);
        this.allMovies();
      }
    );
  }

  Search(){
    if (this.movie.length > 0) {
      this.movieList = this.movieList.filter( res => {
        return res.name.toLocaleLowerCase().match(this.movie.toLocaleLowerCase());
      });
    }else{
      this.ngOnInit();
    }
   }
}
