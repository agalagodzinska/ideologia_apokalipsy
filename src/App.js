
import './App.css'
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Teachings from './components/Teachings';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Teachings />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
