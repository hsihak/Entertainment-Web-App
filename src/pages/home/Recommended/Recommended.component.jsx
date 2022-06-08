import React, { useState, useEffect } from 'react';
import Movie from '../../../components/Movie/DefaultMovie.component';
import Title from '../../../components/Title/Title.component';

const Recommended = () => {
  const [movies, setMovies] = useState([]);

  const recommendedMovies = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=be7dc9888ec71d3b097464b106250c78&language=en-US&page=4'
    );
    const films = await res.json();
    setMovies(films.results);
  };

  useEffect(() => {
    recommendedMovies();
  }, []);

  return (
    <div className='recommended-container grid gap-y-4 justify-center'>
      <Title title={'Recommended for you'} />
      <div className='movie-card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
