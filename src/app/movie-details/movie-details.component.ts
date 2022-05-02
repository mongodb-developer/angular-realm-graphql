import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { Comment } from '../comment';

const GET_MOVIE_WITH_COMMENTS = gql`
  query GetMovieWithComments($movie_id: ObjectId) {
    movie(query:{ _id: $movie_id }) {
      poster
      title
      fullplot
      year
      type
      rated
      imdb {
        rating
      }
      tomatoes {
        viewer {
          meter
        }
        critic {
          meter
        }
      }
    }
    
    comments(query: { movie_id: { _id: $movie_id } }, limit: 5, sortBy: DATE_DESC) {
      name,
      date,
      text
    }
  }
`;

const ADD_COMMENT = gql`
  mutation AddComment($comment: CommentInsertInput!) {
    insertOneComment(data: $comment) {
      name
      text
      date
    }
  }
`;

const LOAD_COMMENTS_OFFSET = gql`
  query LoadCommentsWithOffset($input: CommentsOffsetInput!) {
    CommentsOffset(input: $input) {
      name,
      text,
      date
    }
  }
`;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private id: string;
  movieAndComments$: Observable<{ movie: Movie, comments: Comment[] }>;
  movie: Movie;
  comments: Comment[];
  movieLoading = true;
  commentsLoading = false;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.apollo
        .watchQuery({
          query: GET_MOVIE_WITH_COMMENTS,
          variables: {
            movie_id: this.id
          }
        })
        .valueChanges
        .subscribe({
          next: (result: any) => {
            this.movieLoading = result?.loading;
            this.movie = result?.data?.movie;
            this.comments = result?.data?.comments;
          }
        });
    });
  }

  addComment(comment: Comment) {
    comment.movie_id = {
      link: this.id
    };

    this.apollo.mutate({
      mutation: ADD_COMMENT,
      variables: { comment }
    })
    .subscribe((result: any) => {
      if (result?.data?.insertOneComment) {
        this.comments = [result?.data?.insertOneComment, ...this.comments];
      }
    });
  }

  loadMoreComments() {
    this.commentsLoading = true;

    const input = {
      movie_id: this.id,
      offset: this.comments.length,
      limit: 5,
      sortBy: "date",
      sortOrder: "DESC"
    }

    this.apollo.query({
      query: LOAD_COMMENTS_OFFSET,
      variables: { input }
    })
    .subscribe((result: any) => {
      this.commentsLoading = result?.data?.loading;
      if (result?.data?.CommentsOffset) {
        this.comments = [...this.comments, ...result?.data?.CommentsOffset];
      }
    });
  }
}
