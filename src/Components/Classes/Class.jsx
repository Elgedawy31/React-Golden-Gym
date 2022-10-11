import React, { useState } from "react";
import'./Class.css';
import img from '../../images/tabs-first-icon.png'
import img1 from '../../images/line-dec.png'
import { Slider } from "./slideData";
import Button from '../button/Button'

const Class = () => {

    const [state , setstate] = useState( Slider)
    const [count , setCoutn] = useState(0)

    const sliderHandler = (e) => {
        setCoutn(e.target.id)
    };

    console.log(setstate);


    return (
        <div className="class"> 
            <div className="main">

<div className="main-heading">Our <span>Classes</span></div>

<img src={img1} alt="" /> 

<p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
</div>

            <div className="container">
            
            <div className="left">
                <div className="box"      >
                <img src={img} alt="" />
                <h3  id="0"  onClick={sliderHandler}  >Frist Trainner Class</h3>
                </div>
                <div className="box"   >
                <img src={img} alt="" />
                <h3  id="1"  onClick={sliderHandler}  >Second Trainner Class</h3>
                </div>
                <div className="box"   >
                <img src={img} alt="" />
                <h3  id="2"  onClick={sliderHandler}  >Third Trainner Class</h3>
                </div>
                <div className="box"   > 
                <img src={img} alt="" />
                <h3  id="3"  onClick={sliderHandler}  >Fourth Trainner Class</h3>
                </div>
                <Button >View All Sheudles</Button>
            </div>

            <div className="right">

                <img src={state[count].src} alt="" />

                <h2>{state[count].heading}</h2>

                <p>{state[count].text}</p>

                <Button>View Scheudel</Button>

            </div>
            </div>

        </div>
    )
}
export default Class