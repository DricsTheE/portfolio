import React from "react";
import "./SkillsInfoCard.css"

const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <div className="skills-info-card">
            <h6>{heading}</h6>
            {/* Displays to the right of the cards, the progress and status of each skill card */}
            <div className="skills-info-content">
                {skills.map((item, index) => (
                    // dynamically gets data depends on which card is pressed
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            {/* Displays skill information stored in data.js */}
                            <p>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>

                        {/* Create and display the progress bar */}
                        <div className="skill-progress-bg">
                            <div className="skill-progress" style={{ width: item.percentage }}></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SkillsInfoCard;