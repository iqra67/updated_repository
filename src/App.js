import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header';
import Footer from './components/Footer';

// Pages (jo ab components folder mein hain)
import Home from './components/index';
import About from './components/about';
import Team from './components/team';
import Product from './components/product';
import Services from './components/services';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
