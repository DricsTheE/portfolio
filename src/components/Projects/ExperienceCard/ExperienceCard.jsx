import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ( { details }) => {
    return ( 
        // Create div to serve as card
        <div className="project-experience-card">

            {/* Get name of project from data.js */}
            <h6>{details.title}</h6>

            {/* Display the date of the project from data.js */}
            <div className="project-duration"> {details.date}</div>

            {/* Displays the description of the project as a list */}
            <ul>
                {details.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            {/* Link to the project repos, opens in a new tab */}
            <p>Link to Project Repo : </p>
            <a  className='project-link' href={details.link} target='_blank'>{details.link}</a>
        </div>
     );
}
 
export default ExperienceCard;