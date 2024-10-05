import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Contact from '../components/Contact'
import { Helmet } from 'react-helmet-async'

const contact = () => {
  return (
    <div>
       <Helmet>
        <title>Phone Spot Repair - Contact</title>
        <meta name="description" content="Welcome to the Phone Repair Center. We offer high-quality phone repair services for iPhones, Samsung, and other smartphones. Quick and reliable services." />
      </Helmet>
        <Navbar/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}

export default contact
