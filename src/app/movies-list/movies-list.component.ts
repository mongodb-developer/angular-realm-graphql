import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from '../movie';

const GET_ALL_MOVIES = gql`
  query GetAllMovies {
    movies(limit: 20, query: { num_mflix_comments_gt: 10 }) {
      _id
      title
      poster
      year
      runtime
      rated
      plot
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
  moviesLoading = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.movies$ = this.apollo
      .watchQuery({query: GET_ALL_MOVIES})
      .valueChanges.pipe(
        tap((result: any) => { this.moviesLoading = result?.loading }),
        map((result: any) => result?.data?.movies)
      );
  }
}
