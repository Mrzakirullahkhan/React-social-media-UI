import React from 'react'
import "./registure.css"

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h4 className='loginLogo'>Facebook</h4>
                <span className='loginDesc'>Connect with freinds and<br></br> the world around you on Facebook</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className='loginInput' />
                    <input placeholder="Email" className='loginInput' />
                    <input placeholder="Password" className='loginInput' />
                    <input placeholder="conform password" className='loginInput' />
                    <button className='loginButton'>Sign Up</button>
                   
                    <hr className='linebar'></hr>
                    <button className='loginRegisterButton'>Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
