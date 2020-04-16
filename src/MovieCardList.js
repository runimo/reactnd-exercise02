import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieCardList extends Component {
  render () {
    const { profiles, users, movies, usersByMovie } = this.props;
    
    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        movie={movies[id]}
        users={users}
        usersLikingMovie={usersByMovie[id]}
      />
    ));

 	return (
      <ul class="movie-card-list">{movieCards}</ul>
    )
  }
}

export default MovieCardList