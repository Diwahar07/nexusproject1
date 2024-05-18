import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='login' >
            <div className='auth'>
                <h1>Log in</h1>
                <form>
                    <input required type="text" placeholder='username' name='username' />
                    <input required type="password" placeholder='password' name='password'  />
                    <span>Forget your password ?</span>
                    <button >LOG IN</button>

                    
                </form>
            </div>
            <div className='sidebox'>
                  <h2>Hello, Intern!</h2>
                  <p>Enter Your personal details and start journey    with us</p>
    
                  <button ><Link className='link' to="/Signup">Sign up</Link></button>

            </div>

        </div>
    )
}

export default Login
