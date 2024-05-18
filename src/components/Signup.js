import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Signup() {
  return (
    <div className='login '>
      <div className='sidebox'>

        <h2>Welcome Back!</h2>
        <p>To keep connect with us please login with your personal info</p>
        <button><Link className='link' to="/">Login</Link></button>

      </div>
      <div className='auth'>
        <h1>Sign up </h1>
        
        <form>
          
        
          <input required type="text" placeholder='username' name='username' />
          <input required type="email" placeholder='email' name='email' />
          <input required type="password" placeholder='password' name='password' />

          <button>SIGN UP</button>

          
        </form>
      </div>
    </div>
  )
}

export default Signup
