import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceSection from "../components/ServicesSection"
import CategorySection from "../components/CategorySection"
import { Helmet } from 'react-helmet-async'
const Service = () => {
  return (
    <div>
       <Helmet>
        <title>Phone Spot Repair - Home</title>
        <meta name="description" content="Welcome to the Phone Repair Center. We offer high-quality phone repair services for iPhones, Samsung, and other smartphones. Quick and reliable services." />
      </Helmet>
      <Navbar/>
      <div className='pt-24'>
      <CategorySection />
      <ServiceSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default Service
