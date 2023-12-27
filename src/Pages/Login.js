// Login.js
import React from 'react';
import './All.css';
import fordleIcon from '../Components/Assests/Fordle amblem.png';
import Navbar from '../Components/Navbar';

function Login() {
  return (
    <div>
      <div className='container'>
        <img src={fordleIcon} alt='Fordle Icon' />
        <div className='header'>
          <div className='text'>FORDLE</div>
          <div className='inputs'>
          <div className='inputs'>
        <div className='submit1'>Kullanıcı Adı</div>
            <div className='input'>
              <input type='nickname' />
            </div>
            <div className='submit1'>Parola</div>
            <div className='input'>
              <input type='password' />
            </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar currentPage='login' />
    </div>
  );
}

export default Login;
