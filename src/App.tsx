import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Story from './components/Story';

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
            <Newsletter />
            <Footer />
          </>
        } />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;
