import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import IndustriesServed from './pages/IndustriesServed';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/industries" element={<IndustriesServed />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
