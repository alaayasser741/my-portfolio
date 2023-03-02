import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UilFacebookF, UilLinkedinAlt, UilGithubAlt } from '@iconscout/react-unicons';
import './footer.css'
const Footer = () => {
    const [toggle, showMenu] = useState(false);
    function handleClick(event) {
        const section = document.querySelector(event.target.hash);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <section className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Alaa</h1>
                <ul className="footer__list">
                    <li><Link className='footer__link' onClick={handleClick} to="/#About">About</Link></li>
                    <li><Link className='footer__link' to="/Portfolio">Projects</Link></li>
                    <li><Link className='footer__link' onClick={handleClick} to="/#Testimonial">Testimonial</Link></li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/alaayasser741/" title='Facebook' className="footer__social-icon" target="_blank"><UilFacebookF /></a>
                    <a href="https://www.linkedin.com/in/alaayasser741/" title='Linkedin' className="footer__social-icon" target="_blank"><UilLinkedinAlt /></a>
                    <a href="https://github.com/alaayasser741" title='Github' className="footer__social-icon" target="_blank"><UilGithubAlt /></a>
                </div>
                <span className="footer__copy">
                    &#169; AlaaAbdullah. All right reserved 🖤
                </span>
            </div>
        </section>
    )
}

export default Footer