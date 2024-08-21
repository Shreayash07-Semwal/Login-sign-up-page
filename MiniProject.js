import React from 'react';
import './MiniProject.css';
import user from './user.png'
import email from './email.png'
import lock from './lock.png'

export default function MiniProject() {
  return (
    <div className='container'>
      <div className="header">
        <div className="sign-up">Sign-up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user}/>
          <input type="text" placeholder='Username'/>
        </div>
        <div className="input">
          <img src={email}/>
          <input type="email" placeholder='Email_id'/>
        </div>
        <div className="input">
          <img src={lock}/>
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>click here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}
