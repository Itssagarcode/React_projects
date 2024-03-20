import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const  [currentstate,setCurrentState] = useState('sign up')


  return (

    <div className='login-popup'>
      <form className='login-pop-container' action="">
        <div className="login-popup-title">
        <h2>{currentstate}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentstate==="Login"?<></>:<input type="text"  placeholder='Your name' required/>}
            
            <input type="email" placeholder='Yout email' required/>
            <input type="password" placeholder='password' required />
        </div>
        <button>{currentstate==='Sign Up'?"Create account":"Login"}</button>
         <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
         </div>
         
         {currentstate==="Login"
         ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Signup</span></p>
         :<p>Already have an Account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
         }
         
      </form>
    </div>
  )
}

export default LoginPopup