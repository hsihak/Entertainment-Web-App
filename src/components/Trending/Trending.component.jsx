import { useEffect, useState } from 'react';
import Title from '../Title/Title.component';
import Movie from './Movie';

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const trendingMovies = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=be7dc9888ec71d3b097464b106250c78'
    );
    const films = await res.json();
    console.log(films);
    setMovies(films.results);
  };

  useEffect(() => {
    trendingMovies();
  }, []);

  return (
    <div className='trending-container grid gap-y-4'>
      <Title title={'Trending'} />
      <div className='movie-card grid grid-cols-trending overflow-scroll'>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
