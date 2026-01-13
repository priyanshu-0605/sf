import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import VisitStore from './components/VisitStore';
import MenCollection from './components/MenCollection';
import ChildrenCollection from './components/ChildrenCollection';
import Footer from './components/Footer';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <AboutUs />
    <Contact />
    <VisitStore />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MenCollection />} />
            <Route path="/children" element={<ChildrenCollection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
