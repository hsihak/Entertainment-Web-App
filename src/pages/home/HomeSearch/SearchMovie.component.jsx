import React, { useEffect, useState } from 'react';
import Title from '../../../components/Title/Title.component';
import Movie from '../../../components/Movie/DefaultMovie.component';

const SearchMovie = ({ input }) => {
  const [MoviesAndSeries, setMoviesAndSeries] = useState([]);

  const url =
    'https://api.themoviedb.org/3/search/multi?api_key=be7dc9888ec71d3b097464b106250c78&language=en-US&page=1&include_adult=false&query=';

  const MoviesSeries = async () => {
    const res = await fetch(url + input);
    const films = await res.json();
    setMoviesAndSeries(films.results);
    console.log(films);
  };

  useEffect(() => {
    MoviesSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='recommended-container grid gap-y-4 justify-center'>
      <Title title={`Found ${MoviesAndSeries.length} results for ${input}`} />
      <div className='movie-card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {MoviesAndSeries.map(movie => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchMovie;
