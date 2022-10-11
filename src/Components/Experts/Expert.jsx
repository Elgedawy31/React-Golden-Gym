import React, { useState } from 'react';
import './Expert.css';
import Data from './Data';
import img1 from '../../images/line-dec.png'

const Expert = () => {

    const [state , setstate] = useState(Data)

    const box = state.map((ele , ind) => {
        return (
            <div className="box" key={ind}>
                <img src={ele.src} alt="" />
                <span>{ele.span}</span>
                <h2>{ele.heading}</h2>
                <p>{ele.para}</p>
                <div className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-behance"></i>
                </div>
            </div>
        )
    })

    console.log(setstate);

    return (
        <div className='expert'>
            <div className="main">

<div className="main-heading">EXPERT <span>TRAINERS</span></div>

<img src={img1} alt="" /> 

<p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
            </div>
            <div className="container">
            {box}
            </div>
        </div>
    )
}

export default Expert