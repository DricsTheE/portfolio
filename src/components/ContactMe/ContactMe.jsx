//Import relative files
import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    return ( 
        <section className='contact-container' id="contact">
            {/* Section Title */}
            <h5>Contact Me</h5>

            {/* Display the contact cards */}
            <div className="contact-content">
                <div style={{flex:1}}>
                    <ContactInfoCard
                        iconUrl='./assets/images/email-icon.png'
                        text="matthewli255504@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl='./assets/images/github-icon.png'
                        text="https://github.com/DricsTheE"
                    />
                </div>
                
                {/* Display the text form for contact messaging */}
                <div style={{flex:1}}>
                    <ContactForm />
                </div>
            </div>
        </section>
     );
}
 
export default ContactMe;