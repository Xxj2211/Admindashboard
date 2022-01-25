import React from 'react';
import { useState } from 'react';
import './sign_up.css';

import logo from '../../assets/logo.png';
import google_logo from '../../assets/google_logo.png';
import facebook_logo from '../../assets/facebook_logo.png';
import pwd_img from '../../assets/pwd_img.png';


const Sign_Up = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="dashb__signup">
      <div className="dashb__signup_logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="dashb__signup_text">
        <p>Sign up</p>
      </div>
      <div className="dashb__signup_google">
        <div className="dashb__signup_google_logo">
          <img src={google_logo} alt="google_logo"/>
        </div>
        <div className="dashb__signup_google_text">
          <p>Google</p>
        </div>
      </div>
      <div className="dashb__signup_facebook">
        <div className="dashb__signup_facebook_logo">
          <img src={facebook_logo} alt="facebook_logo"/>
        </div>
        <div className="dashb__signup_facebook_text">
          <p>Facebook</p>
        </div>
      </div>
      <div className="dashb__signup_or">
        <hr/>
        <hr id="dashb__signup_or_hr2"/>
        <p>Or</p>
      </div>
      <div className="dashb__signup_fullname">
        <div className="dashb__signup_fullname_text">
          <p>Full Name</p>
        </div>
        <div className="dashb__signup_fullname_input">
          <input type="text"></input>
        </div>
      </div>
      <div className="dashb__signup_email">
        <div className="dashb__signup_email_text">
          <p>Email Address</p>
        </div>
        <div className="dashb__signup_email_input">
          <input type="email"></input>
        </div>
      </div>
      <div className="dashb__signup_username">
        <div className="dashb__signup_username_text">
          <p>Username</p>
        </div>
        <div className="dashb__signup_username_input">
          <input type="text"></input>
        </div>
      </div>
      <div className="dashb__signup_password">
        <div className="dashb__signup_password_text">
          <p>Password</p>
        </div>
        <div className="dashb__signup_password_input">
          <input type={passwordShown ? "text" : "password"}></input>
        </div>
        <div className="dashb__signup_password_img">
          <button onclick={togglePassword}>Test</button>
        </div>
      </div>
    </div>
  )
}

export default Sign_Up;
