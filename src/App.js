import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCardList from './MovieCardList';
import avatar1 from './avatar1.svg';
import avatar2 from './avatar2.svg';
import avatar3 from './avatar3.svg';
import avatar4 from './avatar4.svg';
import avatar5 from './avatar5.svg';
import avatar6 from './avatar6.svg';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
    avatar: avatar2
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
    avatar: avatar1
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
    avatar: avatar3
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
    avatar: avatar4
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
    avatar: avatar5
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
    avatar: avatar6
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.usersByMovie = {};

    profiles.forEach(profile => {
      const movieId = profile.favoriteMovieID;

      if (this.usersByMovie[movieId]) {
        this.usersByMovie[movieId].push(profile.userID);
      } else {
        this.usersByMovie[movieId] = [profile.userID];
      }
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2 className="app-heading">How Popular is Your Favorite Movie?</h2>
		<MovieCardList
          profiles={profiles}
          movies={movies}
          users={users}
          usersByMovie={this.usersByMovie}
        />
		<p className="footer">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
      </div>
    );
  }
}

export default App;
