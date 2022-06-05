import React from 'react';
import Navbar from './Navbar.component';

const Header = () => {
  return (
    <div className='header max-w-full flex justify-between items-center px-4 py-4 bg-semi-dark-blue'>
      <Navbar />
    </div>
  );
};

export default Header;
