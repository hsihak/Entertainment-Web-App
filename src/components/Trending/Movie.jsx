import React from 'react';

function Movie({ movie }) {
  return (
    <div className='movie px-4'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.original_title}
      />
      <h5 className='text-pure-white'>{movie.title}</h5>
    </div>
  );
}

export default Movie;
