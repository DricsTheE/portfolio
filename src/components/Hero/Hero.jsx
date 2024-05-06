import React from 'react';
import './Hero.css';
import python from '../../assets/python.png';
import react from '../../assets/React.png';
import svelte from '../../assets/svelte.png';
import pfp from '../../assets/Portrait.jpg'
import javascript from '../../assets/javascript.png';

const Hero = () => {
    return ( 
        <section className="hero-container">
            <div className="hero-content">
                <h2>Matthew Li</h2>
                <p>
                    Description about portfolio and myself
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img className='image' src={react} alt="react" />
                    </div>
                    <img className='pfp-img' src={pfp} alt="" />
                </div>

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