import React from 'react'
import Home from '../components/home/Home';
import Contact from '../components/contact/Contact';
import About from '../components//about/About';
import Portfolio from '../components/portfolio/Portfolio';
import Services from '../components/services/Services';
import Skills from '../components/skills/Skills';
import Qualification from '../components/qualification/Qualification';
import Testimonial from '../components/testimonial/Testimonial';

const Index = () => {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonial />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default Index