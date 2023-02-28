import React from 'react'
import './skill.css';
import Frontend from './Frontend';
import CS from './CS';
const Skills = () => {
  return (
    <section className='skills section' id='Skills'>
      <h2 className="section__title" title='About Section Title'>Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <CS />
      </div>
    </section>
  )
}

export default Skills