import React from "react";
import './Hero.css';
import vid from '../../../images/gym-video.mp4'
import Button from "../../button/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navi = useNavigate()
    return (
        <div className="hero">
            <div className="overlay"></div>
            <video src={vid} autoPlay muted loop></video>
            <div className="content">
                <h5>WORK HARDER, GET STRONGER</h5>
                <h1>EASY WITH OUR <span>GYM</span></h1>
                <Button  click = {() => navi('/login')}  >an admin !</Button>
            </div>
        </div>
    )
}

export default Hero