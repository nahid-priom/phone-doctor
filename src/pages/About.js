import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUs'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutSection />
        <WhyChooseUsSection/>
        <Footer/>
      
    </div>
  )
}

export default About
