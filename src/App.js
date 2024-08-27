import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Service from './pages/Service';
import BlogDetails from './components/BlogDetails';
import Subcategory from './components/Subcategory';
import ProductDetails from './components/ProductDetails';
import Appointment from './components/Appoinment';
import ChildCategory from './components/ChildCategory'; // Import the new ChildCategory component
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/services/:category" element={<Subcategory />} />
      <Route path="/product/:category/:model" element={<ProductDetails />} />
      <Route path="/appointment/:model" element={<Appointment />} />
      <Route path="/child-category/:category/:series" element={<ChildCategory />} /> 
      
    </Routes>
  </Router>
);

export default App;
