import './Navbar.css';
import React, { useState } from 'react';
import pfplogo from '../../assets/portfolio_logo.png';
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {

    // Determines mobile menu state
    const [openMenu, setOpenMenu] = useState(false);

    // Function to toggle mobile menu
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            {/* Toggle mobile menu */}
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
            
            <nav className="nav-wrapper">
                <div className="nav-content">
                    {/* Navbar */}
                    <img src={pfplogo} alt="logo" className="logo" />
                    <ul>
                        {/* List the navigational links */}
                        <li>
                            {/* a href links to jump to parts of the page */}
                            <a  href='#hero' className="menu-item">Home</a>
                        </li>
                        <li>
                            <a  href='#skills' className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href='#projects' className="menu-item">Projects</a>
                        </li>
                        <li>
                            <a href='#contact' className="menu-item">Contact Me</a>
                        </li>
                    </ul>

                    {/* Button to open or close the mobile navbar menu */}
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span style={{ fontsize: "0.85rem" }}>
                            {openMenu ? "Close" : "Menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
