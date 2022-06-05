import React from 'react';
import { default as logo } from '../icons/logo.svg';

import { default as navHome } from '../icons/icon-nav-home.svg';
import { default as navMovies } from '../icons/icon-nav-movies.svg';
import { default as navTv } from '../icons/icon-nav-tv-series.svg';
import { default as navBookMark } from '../icons/icon-nav-bookmark.svg';

import { default as profile } from '../icons/image-avatar.png';

const Navbar = () => {
  return (
    <>
      <div className='navLeft'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navCenter flex gap-4'>
        <img src={navHome} alt='home icon' />
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
