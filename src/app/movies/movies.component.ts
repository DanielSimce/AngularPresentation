import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from '../Models/Genres';
import { Movie } from '../Models/Movie';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieForm: FormGroup;
  genreList: Genre[];

  constructor(private movieService: MoviesService, private router: Router){ }

  ngOnInit(): void {
    this.movieForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      genre: new FormControl('0', Validators.required),
      col: new FormControl(null, Validators.required)
    });

    this.movieService.allGenres().subscribe(
      data => {
        this.genreList = data;

      }
    );


  }



  onSubmit(){
  const  movie: Movie = {name: this.movieForm.get('name').value,
  genreId: Number(this.movieForm.get('genre').value), col: this.movieForm.get('col').value};
    this.movieService.saveMovie(movie).subscribe(
      data => {
        this.router.navigate(['movie-list']);
      }
);

  }

}
