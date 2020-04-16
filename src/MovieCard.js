import React, { Component } from 'react';

class MovieCard extends Component {
  render () {
     const { movie, users, usersLikingMovie } = this.props;
    
     return (
      <li
       key={movie.id}
       className="movie-card">
        <h3 className="movie-card-heading">{movie.name}</h3>
        {!usersLikingMovie || usersLikingMovie.length === 0 
         ? (
         <div className="movie-card-content">
           <p className="highlighted">
             This movie is terrible!
           </p>
           <p>
             No one liked it. :(
           </p>
         </div>) 
         : (
         <div className="movie-card-content">
           <p className="highlighted">
             This movie is good!
           </p>
           <p>
             Liked by:
           </p>
            <ul className="user-list">
              {usersLikingMovie &&
                usersLikingMovie.map(userId => {
                  return (
                    <li 
                      key={userId}
                      className="user-list-item">
					  <img class="avatar" src={users[userId].avatar} alt="user avatar" />
                      <p class="user-name">{users[userId].name}</p>
                    </li>
                  );
                })}
            </ul>
		  </div>
        )}
      </li>
    );
  }
}

export default MovieCard