import React from 'react'
import { UilArrowDown } from '@iconscout/react-unicons';

const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="#" className="home__scroll-button " id="About">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--title-color)" className="bi bi-mouse wheel" viewBox="0 0 16 16">
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                </svg>
                <span className="home__scroll-name">Scroll Down <UilArrowDown className="home__scroll-arrow " /></span>
            </a>
        </div>
    )
}

export default ScrollDown