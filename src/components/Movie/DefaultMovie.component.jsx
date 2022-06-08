import React from 'react';

function Movie({ movie }) {
  return (
    <div className='movie px-4'>
      <img
        className='rounded-lg'
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />

      <h5 className='text-pure-white py-4'>{movie.title || movie.name}</h5>
    </div>
  );
}

export default Movie;
