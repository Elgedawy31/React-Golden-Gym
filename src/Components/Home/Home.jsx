import React from "react";
import './Home.css';
import Logo from './logo/Logo'
import Hero from './hero/Hero'
import About from '../About/About';
import Qute from '../qute/Qute';
import Class from '../Classes/Class';
import Expert from '../Experts/Expert';
import Footer from '../footer/Footre'

const Home = () => {
    return (

        <div className="home">
            <Logo />
            <Hero />
            <About/>
            <Qute/>
            <Class/>
            <Expert/>
            <Footer/>
            
        </ div>

    )
}

export default Home