import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Genre } from 'src/app/Models/Genres';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  name: string;
  genreId: number;
  col: number;
  id: number;
  genreList: Genre[];
  error: string;

  constructor(private route: ActivatedRoute, private movieService: MoviesService){ }

  ngOnInit(): void {
     this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.movieService.movieById(this.id).subscribe(
      data => {
        this.genreId = data.genreId;
        this.col = data.col;
        this.name = data.name;
      }, error => {
        this.error = error.error;
      }
    );
    this.movieService.allGenres().subscribe(
      data => {
        this.genreList = data;
      }
    );
  }

}
