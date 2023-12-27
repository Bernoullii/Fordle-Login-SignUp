// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentPage }) => {
  return (
    <nav className='navbar'>
      <div className='submit-container'>
        {currentPage === 'home' && (
          <>
            <div className='submit'>
              <Link to='/howto'>Nasıl Oynanır?</Link>
            </div>
            <div className='submit'>
              <Link to='/login'>Giriş Yap/Oyna</Link>
            </div>
          </>
        )}

        {(currentPage === 'login' || currentPage === 'signup') && (
          <>
            <div className='submit'>
              <Link to='/login'>Giriş Yap/Oyna</Link>
            </div><div className='submit'>
              <Link to='/signup'>Kaydol</Link>
            </div>
            
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
