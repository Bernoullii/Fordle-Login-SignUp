// Home.js
import React from 'react';
import './All.css';
import fordleIcon from '../Components/Assests/Fordle amblem.png';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <div className='container'>
      <img src={fordleIcon} alt='Fordle Icon' />
      <div className='header'>
        <div className='text'>FORDLE</div>
        <div className='text'>5 Harfli Kelime, 6 Tahmin </div>
        <Navbar currentPage='home' />
      </div>
    </div>
  );
}

export default Home;
