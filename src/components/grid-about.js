import React from "react";
import "../App.css";
import Air1 from "./air1.jpeg";
import Air2 from "./air2.jpeg";
import Air3 from "./air3.jpeg";
import Air4 from "./air4.jpeg";
import Air5 from "./air5.jpeg";
import Air6 from "./air6.jpeg";
import Air7 from "./air7.jpeg";
import Air8 from "./air8.jpeg";
import Air9 from "./air9.avif";

function Gridabout(){
    return(
    <>
        <div className="images">
            <img className="one" src={Air1}></img>
            <img className="two" src={Air2}></img>
            <img className="three" src={Air3}></img>
            <img className="four" src={Air4}></img>
            <img className="five" src={Air5}></img>
            <img className="six" src={Air6}></img>
            <img className="seven" src={Air7}></img>
            <img className="eight" src={Air8}></img>
            <img className="nine" src={Air9}></img>
        </div>
        <div className="About">
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </>
    )
}

export default Gridabout;