import React, { useState } from "react";
import './Logo.css'
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../button/Button";

const Logo = () => {
    
    const navi = useNavigate()
    
    const [state , setstate] = useState(true)

    return (
        <div className="logo">
            <div className="overlay"></div>
            <div className="container">
                <i className={state ? 'fas fa-bars' : 'fas fa-times'} onClick={() => setstate(!state)}></i>
            <h2>golden <span>gym</span></h2>

            <nav className={state ? 'hiden' : 'show'}>
            <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>About</NavLink></li>
                    <li><NavLink to='/'>Classes</NavLink></li>
                    <li><NavLink to='/'>Sheudles</NavLink></li>
                    <li><NavLink to='/'>Contact</NavLink></li>
            </ul>
            </nav> 

            <Button click = {() => navi('/register')}  >check an appointment</Button>
            </div>
        </div>
    )
}

export default Logo