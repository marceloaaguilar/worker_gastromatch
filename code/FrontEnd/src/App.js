import React from 'react';
import Navbar from './Navbar';
import MainBanner from '../../../../PLF-ES-2025-2-TI5-0492100-Gastromatch/code/Front-End/src/MainBanner';
import HowItWorks from './HowItWorks';
import About from './About';
import PopularChefs from './PopularChefs';
import Highlights from './Highlights';
import Packages from './Packages';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <HowItWorks />
      <About />
      <PopularChefs />
      <Highlights />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
