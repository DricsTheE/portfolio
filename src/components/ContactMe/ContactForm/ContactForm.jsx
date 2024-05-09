//Import needed files
import './ContactForm.css'
import React from 'react'

const ContactForm = () => {
    return ( 
        <div className="contact-form-content">
            <form>
                {/* Create the text input area for contact information */}
                <div className="name-container">

                    {/* Takes user input */}
                    <input type="text" name="firstname" placeholder="First Name"/>
                    <input type="text" name="lastname" placeholder="Last Name"/>

                </div>

                {/* Takes user input */}
                <input type="text" name="emai" placeholder="Emai"/>
                <textarea type="text" name="message" placeholder='Message' rows={3}/>
                
                {/* Decorational Button, does nothing */}
                <button>SEND</button>
            </form>
        </div>
     );
}
 
export default ContactForm;