import React from 'react'
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade"
import { Button } from "./Button";
import "./HeroSection.css";
import cover from '../images/cover.png'

const HeroSection = () => {
    return (
        <div className = "herosection">
            <div className="herosection__content">
                <Fade top>
                    <p className="herosection__content-title">We are mysaa</p>
                    <p className= "herosection__content-description">The only skincare products <br></br> you're ever going to need</p>
                </Fade>
                <Fade bottom><Link to="/shop"><Button buttonStyle="outline" buttonColor="green-2">View Products</Button></Link></Fade>
            </div>
            <div className="herosection__image">
                <img  className="herosection__cover"src={cover} alt="cover"/>
            </div>
        </div>
    )
}

export default HeroSection
