//Import needed files
import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ iconUrl, text }) => {
    return (
        
        <div className="contact-details-card">
            {/* create the contact cards displaying contact information */}
            <div className="icon">
                {/* Display icon from ContactMe.jsx file */}
                <img src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    );
}

export default ContactInfoCard;