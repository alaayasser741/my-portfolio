import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import flag from '../../assets/palestine.webp'
import ScrollDown from './ScrollDown';
const Home = () => {
    return (
        <section className="home section" id="Home">
        <img className='palestine' src={flag} alt="palestine" />
            <div className="container home__container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img" title='My Image'></div>
                    <Data />
                </div>
                    <ScrollDown/>
            </div>
        </section>
    )
}

export default Home