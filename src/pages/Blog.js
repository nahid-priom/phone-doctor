import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogSection from '../components/BlogSection'
import { Helmet } from 'react-helmet-async'

const Blog = () => {
  return (
    <div>
       <Helmet>
        <title>Phone Spot Repair - Blog</title>
        <meta name="description" content="Welcome to the Phone Repair Center. We offer high-quality phone repair services for iPhones, Samsung, and other smartphones. Quick and reliable services." />
      </Helmet>
      <Navbar/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Blog
