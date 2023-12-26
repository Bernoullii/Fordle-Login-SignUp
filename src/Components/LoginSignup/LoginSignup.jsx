import React, { useState } from 'react';
import './LoginSignup.css';
import fordleIcon from '../Assests/Fordle amblem.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Giriş Yap/Oyna');

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  return (
    <div className='container'>
      <img src={fordleIcon} alt='Fordle Icon' />
      <div className='header'>
        <div className='text'>FORDLE</div>
        <div className='text'>{action}</div>
      </div>

      <div className='inputs'>
        {action === 'Kaydol' ? (
          <>
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
          </>
        ) : <>
        <div className='submit1'>Kullanıcı Adı</div>
        <div className='input'>
          <input type='nickname' />
        </div>
        <div className='submit1'>Parola</div>
        <div className='input'>
          <input type='password' />
        </div>
      </>}
      </div>

      <div className='forgot-password'>
        Parolanı mı unuttun? <span>Buraya Tıkla!</span>
      </div>

      <div className='submit-container'>
        <div
          className={action === 'Kaydol' ? 'submit gray' : 'submit'}
          onClick={() => handleActionChange('Giriş Yap/Oyna')}
        >
          Giriş Yap/Oyna
        </div>
        <div
          className={action === 'Giriş Yap/Oyna' ? 'submit gray' : 'submit'}
          onClick={() => handleActionChange('Kaydol')}
        >
          Kaydol
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;