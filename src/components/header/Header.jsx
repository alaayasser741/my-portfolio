import React, { useState } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { UilEstate, UilUser, UilFileAlt, UilSuitcaseAlt, UilImage, UilMessage, UilTimes, UilApps } from '@iconscout/react-unicons'
const Header = () => {
    // Header Shadow
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector('.header');
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header")
        } else {
            header.classList.remove("scroll-header")
        }
    })
    // Toggle Menu
    const [toggle, showMenu] = useState(false);
    function handleClick(event) {
        const section = document.querySelector(event.target.hash);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // Active Link
    const [activeNav, setActiveNav] = useState("#Home")
    return (
        <header className="header">
            <nav className="nav container">
                {/* Logo */}
                <Link to="/" className="nav__logo">Alaa</Link>
                {/* nav list (menu) */}
                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        {/* Home */}
                        <li className="nav__item">
                            <Link to="/" onClick={() => { setActiveNav("#Home") }} className={activeNav === "#Home" ? "nav__link active-link" : "nav__link"}>
                                <UilEstate className="nav__icon" />Home</Link>
                        </li>
                        {/* About */}
                        <li className="nav__item">
                            <Link to="/#About" onClick={() => { setActiveNav("#About"); handleClick(); }} className={activeNav === "#About" ? "nav__link active-link" : "nav__link"}>
                                <UilUser className="nav__icon" />About</Link>
                        </li>
                        {/* Skills */}
                        <li className="nav__item">
                            <Link to="/#Skills" onClick={() => { setActiveNav("#Skills"); handleClick(); }} className={activeNav === "#Skills" ? "nav__link active-link" : "nav__link"}>
                                <UilFileAlt className="nav__icon" />Skills</Link>
                        </li>
                        {/* Services */}
                        <li className="nav__item">
                            <Link to="/#Services" onClick={() => { setActiveNav("#Services"); handleClick(); }} className={activeNav === "#Services" ? "nav__link active-link" : "nav__link"}>
                                <UilSuitcaseAlt className="nav__icon" />Services</Link>
                        </li>
                        {/* Portfolio */}
                        <li className="nav__item">
                            <Link to="/#Portfolio" onClick={() => { setActiveNav("#Portfolio"); handleClick(); }} className={activeNav === "#Portfolio" ? "nav__link active-link" : "nav__link"}>
                                <UilImage className="nav__icon" />Portfolio</Link>
                        </li>
                        {/* Contact */}
                        <li className="nav__item">
                            <Link to="/contact" onClick={() => { setActiveNav("#contact") }} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <UilMessage className="nav__icon" />Contact</Link>
                        </li>
                    </ul>
                    <UilTimes onClick={() => { showMenu(!toggle) }} className="nav__close" />
                </div>
                <div onClick={() => { showMenu(!toggle) }} className="nav__toggle">
                    <UilApps />
                </div>
            </nav>
        </header>
    )
}

export default Header