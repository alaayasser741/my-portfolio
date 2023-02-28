import React from 'react';
import './about.css';
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Alaa-Abdullah-cv.pdf";
import Info from './Info';
const About = () => {
  return (
    <section className='about section' id='About'>
      <h2 className="section__title" title='About Section Title'>About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img className='about__img' src={AboutImg} title="my image" alt="About__img" />
        <div className="about__data">
          <Info />
          <p className="about__description" title='Brief about me'>
            Front-End Developer creative multi-tasking developer is interested in
            detail and mastery in working and working to the fullest I'm very skilled
            in searching, Good at teamwork, and quick to learn and develop skills.
          </p>
          <a download='' href={CV} className="button button--flex">Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--container-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather cv__icon feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About