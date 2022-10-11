import React from "react";
import './About.css';
import img1 from '../../images/line-dec.png'
import Box from "./Box";

const About = () => {

    return (
        <div className="about">
            <div className="container">
                
            <div className="main">

                <div className="main-heading">CHOOSE <span>PROGRAM</span></div>

                <img src={img1} alt="" /> 

                <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
            </div>
            <Box />
            </div>
        </div>
    )
}

export default About