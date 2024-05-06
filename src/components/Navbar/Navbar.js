import './Navbar.css';
import React, { useState } from 'react';
import pfplogo from '../../assets/portfolio_logo.png';
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src={pfplogo} alt="logo" className="logo" />
                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact Me</a>
                        </li>
                        <button className="contact-btn">
                            Click Me
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"} style={{ fontsize: "1.8rem" }}>
                            {openMenu ? "Close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
