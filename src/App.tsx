import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Footer from './components/Footer';
import Story from './pages/Story';
import Services from './pages/Services';
import Contacts from './components/Contacts';
import Catalog from './pages/Catalog';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <About />
            <Footer />
          </>
        } />
        <Route path="/story" element={<Story />} />
        <Route path="/services" element={<Services />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
