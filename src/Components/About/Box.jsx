import React from "react";
import { Link } from "react-router-dom";
import { dat } from "./Data";
const Box = () => {

    const mapo = dat.map((ele , ind) => {
        return (
            <div className="box">
                <img src={ele.src} alt="" />
                <div className="content">
                    <h2>{ele.head}</h2>
                    <p>{ele.para}</p>
                    <Link to='/'>discover more </Link>
                </div>
            </div>
        )
    })
    return (
        <div className="abo">

                {mapo}
        </div>
    )
}


export default Box