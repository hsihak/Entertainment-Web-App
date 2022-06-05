import React from 'react';
import { default as searchIcon } from '../icons/icon-search.svg';

const Search = () => {
  return (
    <div className='searchInput flex px-4 py-4 gap-x-2'>
      <img src={searchIcon} alt='search icon' />
      <input
        className='input text-pure-white bg-dark-blue w-full focus:outline-none'
        type='search'
        placeholder='Search for movies or TV series'
      />
    </div>
  );
};

export default Search;
