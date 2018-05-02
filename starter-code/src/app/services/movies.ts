import { Injectable } from '@angular/core';
import { movies } from "../../sample-movies";
import * as _ from 'underscore';

export interface Movie {
    id: number,
    title: string,
    poster: string,
    synopsis: string,
    genres: Array<string>,
    year: number,
    director: string,
    actors: Array<string>,
    hours: Array<string>,
    room: number
    
}


@Injectable()
export class servicemovies{
   movies: Array<Movie> = movies;
 
   
    constructor() { 

   
    }
    getMovies(){
        return this.movies;
    }
    getMovie(id:number):Object{
        return _.findWhere(this.movies,{id:id});
    }
    
}