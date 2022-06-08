import React from 'react';
import { default as logo } from '../../assets/icons/logo.svg';

import { default as navMovies } from '../../assets/icons/icon-nav-movies.svg';
import { default as navTv } from '../../assets/icons/icon-nav-tv-series.svg';
import { default as navBookMark } from '../../assets/icons/icon-nav-bookmark.svg';

import { default as profile } from '../../assets/icons/image-avatar.png';

// fill='#5A698F'

const Navbar = () => {
  const pathName = window.location.pathname;
  return (
    <>
      <div className='navLeft'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navCenter flex gap-4'>
        <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z'
            fill={pathName === '/' ? 'white' : '#5A698F'}
          />
        </svg>
        <img src={navMovies} alt='movies icon' />
        <img src={navTv} alt='tv icon' />
        <img src={navBookMark} alt='bookmark icon' />
      </div>
      <div className='navRight'>
        <img className='w-8' src={profile} alt='profile' />
      </div>
    </>
  );
};

export default Navbar;
