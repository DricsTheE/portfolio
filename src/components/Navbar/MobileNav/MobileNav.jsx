import React from 'react'
import './MobileNav.css'
import logo from '../../../assets/portfolio_logo.png'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            {/* Toggle the menu in mobile displays */}
            
            {/* Display the contents of the menu */}
            <div className='mobile-menu-container'>
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href='#hero' className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href='#skills' className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href='#projects' className="menu-item">Projects</a>
                    </li>
                    <li>
                        <a href='#contact' className="menu-item">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileNav;