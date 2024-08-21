import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Service from './pages/Service';

const App = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/about" element={<About />} />

      <Route path="/service" element={<Service />} />


      
      
    </Routes>
  </Router>
);

export default App;
