import { Component, OnInit } from '@angular/core';
import { servicemovies } from "../services/movies";

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Object> = []

  constructor(private susana: servicemovies) { }

  ngOnInit() {
    this.movies =this.susana.getMovies()
  }

}
