import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../movie';

const GET_ALL_MOVIES = gql`
  query GetAllMovies {
    movies(limit: 50) {
      _id
      title
      poster
      year
      imdb {
        rating
      }
    }
  }
`;

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.movies$ = this.apollo
      .watchQuery({query: GET_ALL_MOVIES})
      .valueChanges.pipe(map((result: any) => result?.data?.movies));
  }
}
