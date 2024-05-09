//Import needed files
import React from 'react';
import './Hero.css';
import pfp from '../../assets/Portrait.jpg'


const Hero = () => {
    return ( 
        <section className="hero-container" id="hero">
            <div className="hero-content">
                {/* Displays main text and sub text */}
                <h2>Matthew Li</h2>
                <h4> Welcome to my Portfolio Page! </h4> <br />
                <p> I am currently a senior in CSUF studying in the Department of Computer Science and Engineering program, working towards a bachelors degree.</p>
            </div>

            {/* Div for images and portrait */}
            <div className="hero-img">
                {/* Create one showcased tech image to the side */}
                <div>
                    {/* Displays portrait */}
                    <img className='pfp-img' src={pfp} alt="" />
                </div>

            </div>
        </section>
    
    );
}
 
export default Hero;