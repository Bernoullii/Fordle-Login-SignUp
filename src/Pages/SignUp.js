// Signup.js
import React from 'react';
import './All.css';
import fordleIcon from '../Components/Assests/Fordle amblem.png';
import Navbar from '../Components/Navbar';

function Signup() {
  return (
    <div>
      <div className='container'>
        <img src={fordleIcon} alt='Fordle Icon' />
        <div className='header'>
          <div className='text'>FORDLE</div>
          <div className='inputs'>
      <div className='submit1'>İsim</div>
            <div className='input'>
              <input type='name' />
            </div>
            <div className='submit1'>Soyisim</div>
            <div className='input'>
              <input type='surname' />
            </div>
            <div className='submit1'>E-posta</div>
            <div className='input'>
              <input type='email' />
            </div>
            <div className='submit1'>Kullanıcı Adı</div>
            <div className='input'>
              <input type='nickname' />
            </div>
            <div className='submit1'>Parola</div>
            <div className='input'>
              <input type='password' />
            </div>
            <div className='submit1'>Parola Tekrar</div>
            <div className='input'>
              <input type='password' />
            </div>
            </div>
        </div>
      </div>
      <Navbar currentPage='signup' />
    </div>
  );
}

export default Signup;
