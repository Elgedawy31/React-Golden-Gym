import React from "react";
import './Qute.css'
import img1 from '../../images/cta-bg.jpg'
import Button from '../button/Button'
const Qute = () => {

    return (
        <div className="qute">
            <div className="mohtawa">
            <img src={img1} alt="" />
            <div className="content">
                <h1>DON'T <span>THINK</span>, BEGIN <span>TODAY</span>!</h1>
                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                <Button>Became a member</Button>
            </div>
            </div>
        </div>
    )
}

export default Qute