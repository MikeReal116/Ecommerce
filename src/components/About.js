import React from 'react';
import Zoom from "react-reveal/Zoom";
import about from "../images/about.png";
import "./About.css"

const About = () => {
    return (
        <div className="about">
            <Zoom cascade>
                <div className="about__description">
                    <p className="about__description-heading">Pronounced Mysa</p>
                    <p className="about__description-text">Mysa is a Swedish word meaning a nice, relaxing time. I felt this perfectly embodied the products we aim to create.</p>
                </div>
            </Zoom>
            <div className="about__image">
                <img src={about} alt="cover"/>
            </div>
        </div>
    )
}

export default About
