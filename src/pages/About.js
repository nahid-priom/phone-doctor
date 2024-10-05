import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import WhyChooseUsSection from '../components/WhyChooseUs'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div>
       <Helmet>
        <title>Phone Spot Repair - About</title>
        <meta name="description" content="Welcome to the Phone Repair Center. We offer high-quality phone repair services for iPhones, Samsung, and other smartphones. Quick and reliable services." />
      </Helmet>
        <Navbar/>
        <AboutSection />
        <WhyChooseUsSection/>
        <Footer/>
      
    </div>
  )
}

export default About
