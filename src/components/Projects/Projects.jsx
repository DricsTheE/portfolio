import React, { useRef } from 'react'
import './Projects.css'
import { PROJECTS } from "../../utils/data";
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from "react-slick";

const Projects = () => {
    // Imported react-slick to display multiple cards and swipe between them
    const sliderRef = useRef();

    // settings for react-slick
    const settings = {
        dost: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                // For mobile view
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ], 
    };

    return ( 
        <section className='experience-container' id="projects">
            <h5>Projects</h5>

            {/* Displays the projects card */}
            <div className="experience-content">
                {/* use react-slider */}
                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (
                        // Calls experience card to display the card and items inside from data.js
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
     );
}
 
export default Projects;