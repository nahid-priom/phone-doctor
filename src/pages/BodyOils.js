import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BodyOils from '../components/BodyOils'
import { Helmet } from 'react-helmet-async'


const bodyOils = () => {
  return (
    <div>
       <Helmet>
        <title>Phone Spot Repair - Body Oils</title>
        <meta name="description" content="Welcome to the Phone Repair Center. We offer high-quality phone repair services for iPhones, Samsung, and other smartphones. Quick and reliable services." />
      </Helmet>
        <Navbar/>
        <BodyOils />
        <Footer/>
      
    </div>
  )
}

export default bodyOils
