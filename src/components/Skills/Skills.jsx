import React, { useState } from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import { SKILLS } from "../../utils/data"
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {

    // Determines which skill card is selected
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    // Get information from selected skill card
    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <section className="skills-container" id="skills">
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        // Displays the skill card and gets information from SkillCard.jsx by passing in data from Data.js
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectedSkill(item);
                            }}
                        />
                    ))}
                </div>

                {/* Displays the information of the selected skill card */}
                <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>
        </section>
    );
}

export default Skills;