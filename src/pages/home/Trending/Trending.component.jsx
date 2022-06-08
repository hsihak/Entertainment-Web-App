import { useEffect, useState } from 'react';
import Title from '../../../components/Title/Title.component';
import Movie from '../../../components/Movie/DefaultMovie.component';

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const trendingMovies = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=be7dc9888ec71d3b097464b106250c78&language=en-US&page=2'
    );

    const films = await res.json();
    setMovies(films.results);
  };

  useEffect(() => {
    trendingMovies();
  }, []);

  return (
    <div className='trending-container grid gap-y-4'>
      <Title title={'Trending'} />
      <div className='movie-card grid grid-cols-trending overflow-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-x-scroll '>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
