import React from 'react'
import Home from '../components/home/Home';
import Contact from '../components/contact/Contact';
import About from '../components//about/About';
import Portfolio from '../components/portfolio/Portfolio';
import Services from '../components/services/Services';
import Skills from '../components/skills/Skills';
import Qualification from '../components/qualification/Qualification';

const Index = () => {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default Index