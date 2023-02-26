import React, { useState } from 'react'
import './header.css';
import { UilEstate, UilUser, UilFileAlt, UilSuitcaseAlt, UilImage, UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'
const Header = () => {
    // Toggle Menu
    const [toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                {/* Logo */}
                <a href="index.html" className="nav__logo">Alaa</a>
                {/* nav list (menu) */}
                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        {/* Home */}
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <UilEstate className="nav__icon" />Home</a>
                        </li>
                        {/* About */}
                        <li className="nav__item">
                            <a href="#About" className="nav__link">
                                <UilUser className="nav__icon" />About</a>
                        </li>
                        {/* Skills */}
                        <li className="nav__item">
                            <a href="#Skills" className="nav__link">
                                <UilFileAlt className="nav__icon" />Skills</a>
                        </li>
                        {/* Services */}
                        <li className="nav__item">
                            <a href="#Services" className="nav__link">
                                <UilSuitcaseAlt className="nav__icon" />Services</a>
                        </li>
                        {/* Portfolio */}
                        <li className="nav__item">
                            <a href="#Portfolio" className="nav__link">
                                <UilImage className="nav__icon" />Portfolio</a>
                        </li>
                        {/* Contact */}
                        <li className="nav__item">
                            <a href="#Contact" className="nav__link">
                                <UilMessage className="nav__icon" />Contact</a>
                        </li>
                    </ul>
                    <UilTimes onClick={()=>{showMenu(!toggle)}} className="nav__close" />
                </div>
                <div onClick={()=>{showMenu(!toggle)}} className="nav__toggle">
                    <UilApps  />
                </div>
            </nav>
        </header>
    )
}

export default Header