import { Component, OnInit } from '@angular/core';
import { servicemovies } from "../services/movies";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movie: object;
  movieId: number;

  constructor(private susana: servicemovies, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movieId = Number(params['id']));
    this.movie=this.susana.getMovie(this.movieId);
  }

}
