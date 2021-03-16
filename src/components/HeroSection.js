import React from 'react'
import { Button } from "./Button";
import "./HeroSection.css";
import cover from '../images/cover.png'

const HeroSection = () => {
    return (
        <div className = "herosection">
            <div className="herosection__content">
                <p className="herosection__content-title">We are mysaa</p>
                <p className= "herosection__content-description">The only skincare products <br></br> you're ever going to need</p>
                <Button buttonStyle="outline" buttonColor="green">View Products</Button>
            </div>
            <div className="herosection__image">
                <img src={cover} alt="cover"/>
            </div>
        </div>
    )
}

export default HeroSection
