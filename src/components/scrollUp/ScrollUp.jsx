import React from 'react'
import { UilArrowUp } from '@iconscout/react-unicons'
import './scrollup.css'
const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const ScrollUp = this.document.querySelector('.scrollUp');
        if (this.scrollY >= 560) {
            ScrollUp.classList.add("show-scroll")
        }else{
            ScrollUp.classList.remove("show-scroll")
        }
    })
    return (
        <a href="#" className='scrollUp'>
            <UilArrowUp size="24" className="scrollUp__icon" />
        </a>
    )
}

export default ScrollUp