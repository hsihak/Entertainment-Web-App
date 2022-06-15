import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import axios from 'axios';
import { default as SearchIcon } from '../assets/icons/icon-search.svg';
import Carousel from 'carousel-react-rcdev';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [trendingResults, setTrendingResults] = useState([]);
  const [nowPlayingResults, setNowPlayingResults] = useState([]);
  const apiKey = 'be7dc9888ec71d3b097464b106250c78';
  const Trending_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
  // const NowPlaying_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  const MultiSearch_URL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=`;

  useEffect(() => {
    const getTrending = async () => {
      setIsLoading(true);
      const res = await fetch(`${Trending_URL}${apiKey}`);
      const data = await res.json();
      setTrendingResults(data.results);
      setIsLoading(false);
    };

    getTrending();
  }, []);

  useEffect(() => {
    const getNowPlaying = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await res.json();
      setNowPlayingResults(data.results);
      setIsLoading(false);
    };
    getNowPlaying();
  }, []);

  const fetchData = async searchString => {
    try {
      const res = await axios.get(`${MultiSearch_URL}${searchString}`);
      console.log(res);
      setSearchResults(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const onSearchChange = e => {
    setSearchData(e.target.value);
    fetchData(e.target.value);
  };

  if (searchData) {
    return (
      <div className='home-section'>
        <Navbar />
        <div className='flex gap-2 px-4 py-6 search-bar'>
          <img src={SearchIcon} alt='' />
          <input
            type='search'
            onChange={onSearchChange}
            value={searchData}
            placeholder={`Search for `}
            className='w-screen text-white outline-none bg-dark-blue caret-white'
          />
        </div>

        {isLoading ? (
          <h1 className='text-white'>Loading...</h1>
        ) : (
          <Cards
            results={searchResults}
            title={`Found ${searchResults.length} results for ${searchData}`}
            styles={
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 overflow-scroll overflow-y-hidden gap-2 overflow-x-hidden overflow-y-hidden'
            }
          />
        )}
      </div>
    );
  } else {
    return (
      <div className='home-section'>
        <Navbar />
        <div className='flex gap-2 px-4 py-6 search-bar'>
          <img src={SearchIcon} alt='' />
          <input
            type='search'
            onChange={onSearchChange}
            value={searchData}
            placeholder={`Search for movies or TV series`}
            className='w-screen text-white outline-none bg-dark-blue caret-white'
          />
        </div>
        {isLoading ? (
          <h1 className='text-white'>Loading...</h1>
        ) : (
          <Carousel>
            <Cards
              results={trendingResults}
              title={'Trending'}
              styles={
                'grid grid-cols-trending overflow-scroll items-center overflow-x-hidden overflow-y-hidden mb-4'
              }
            />
          </Carousel>
        )}
        {isLoading ? (
          <h1 className='text-white'>Loading...</h1>
        ) : (
          <Cards
            results={nowPlayingResults}
            title={'Now Playing'}
            styles={
              'grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 justify-center items-center overflow-none'
            }
          />
        )}
      </div>
    );
  }
}

export default Home;

/* <Cards results={results} title={'Recommended for You'} />} */
