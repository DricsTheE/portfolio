//Import needed files
import React from 'react';
import './Hero.css';
import python from '../../assets/python.png';
import react from '../../assets/React.png';
import svelte from '../../assets/svelte.png';
import pfp from '../../assets/Portrait.jpg'
import javascript from '../../assets/javascript.png';

const Hero = () => {
    return ( 
        <section className="hero-container" id="hero">
            <div className="hero-content">
                {/* Displays main text and sub text */}
                <h2>Matthew Li</h2>
                <p>
                    Welcome to my Portfolio Page!
                </p>
            </div>

            {/* Div for images and portrait */}
            <div className="hero-img">
                {/* Create one showcased tech image to the side */}
                <div>
                    {/* Creates the display border for images */}
                    <div className="tech-icon">
                        {/* Displays image */}
                        <img className='image' src={react} alt="react" />
                    </div>
                    {/* Displays portrait */}
                    <img className='pfp-img' src={pfp} alt="" />
                </div>

                {/* List the rest of the icons in a row */}
                <div>
                    <div className="tech-icon">
                        <img  className='image' src={python} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img className='image'  src={svelte} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img  className='image' src={javascript} alt="" />
                    </div>
                </div>
            </div>
        </section>
    
    );
}
 
export default Hero;