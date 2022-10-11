import React from 'react';
import './Book.css';
import img1 from '../../images/bg-registration-form-6.jpg'
import img2 from '../../images/registration-form-6.jpg'

const Book = () => {

    return (
        <div className='book'>
            <img src={img1} alt="" />
            <div className="content">
                <div className="img">

                <img src={img2} alt="" />

                </div>
                <div className="box">
                    <h2>MAKE AN APPOINTMENT</h2>
                    <form >
                        <div className="one">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Mail' />
                        </div>
                        <div className="one">
                        <input type="text" placeholder='Phone' />
                        <select>
                            <option>Choce Class</option>
                            <option>Class One</option>
                            <option>Class Two </option>
                            <option>Class Three</option>
                        </select>
                        </div>
                        <textarea placeholder='Meassage'></textarea>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Book