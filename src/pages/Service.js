import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceSection from "../components/ServicesSection"
import CategorySection from "../components/CategorySection"
const Service = () => {
  return (
    <div>
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
