import React from 'react';
import './Login.css'
import bgimg from '../../images/bg-01.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='login'> 
        <img src={bgimg} alt="" />
        <div className="content">
            <h2>login</h2>
            <form >
                <div className="box">
                <span>User Name</span>
                <div className="input">
                    <input type="text" placeholder='Enter Your Name' />
                </div>
                </div>
                <div className="box">
                <span>Password</span>
                <div className="input">
                    <input type='password' placeholder='Enter Your Passowrd' />
                </div>
                </div>
            </form>
            <Link to ='/login'>Forgot Password ?</Link>
            <button >Login</button>
            <span className='span'>Or Sign Up Using</span>
            <div className="icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google"></i>
            </div>
        </div>
            </div>
    )
}

export default Login