import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h4 className='loginLogo'>Facebook</h4>
                <span className='loginDesc'>Connect with freinds and<br></br> the world around you on Facebook</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className='loginInput' />
                    <input placeholder="Password" className='loginInput' />
                    <button className='loginButton'>Log In</button>
                    <span className='loginForget'>Forget Password?</span>
                    <hr className='linebar'></hr>
                    <button className='loginRegisterButton'>Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
