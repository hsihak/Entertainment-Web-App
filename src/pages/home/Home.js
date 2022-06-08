import Header from '../../components/Header/Header.component';
import Trending from './Trending/Trending.component';
import Recommended from './Recommended/Recommended.component';
import SearchMovie from './HomeSearch/SearchMovie.component';
import { default as searchIcon } from '../../assets/icons/icon-search.svg';
import { useState } from 'react';

const Search = () => {
  const [InputData, setInputData] = useState('');
  return {
    InputData,
    render: (
      <div className='searchInput flex px-4 py-4 gap-x-2'>
        <img src={searchIcon} alt='search icon' />
        <input
          id='input'
          className='input text-pure-white bg-dark-blue w-full focus:outline-none'
          type='search'
          placeholder='Search for movies or TV series'
          onChange={e => setInputData(e.target.value)}
        />
      </div>
    ),
  };
};

const DefaultHome = () => {
  return (
    <>
      <Trending />
      <Recommended />
    </>
  );
};

const SearchHome = ({ render, InputData }) => {
  return (
    <>
      <SearchMovie input={InputData} />
    </>
  );
};

const Home = () => {
  const { render, InputData } = Search();
  const CheckInput = () => {
    if (InputData) {
      return <SearchHome {...{ render, InputData }} />;
    } else {
      return <DefaultHome />;
    }
  };
  return (
    <div className='main bg-dark-blue max-h-full'>
      <Header />
      {render}
      <CheckInput />
    </div>
  );
};

export default Home;
