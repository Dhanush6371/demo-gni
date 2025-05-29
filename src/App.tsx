import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Preloader from './components/preloader/Preloader';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import CopyrightPolicy from './pages/copyright';

import PrivacyPolicy from './pages/PrivacyPolicy';



const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return; // Don't scroll to top if we found the element
      }
    }
    
    // Otherwise scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  const [hasSeenPreloader, setHasSeenPreloader] = useState(() => {
    return sessionStorage.getItem('hasSeenPreloader') === 'true';
  });

  const [isLoading, setIsLoading] = useState(!hasSeenPreloader);

  useEffect(() => {
    setIsLoading(!hasSeenPreloader);

    const handleBeforeUnload = () => {
      sessionStorage.removeItem('hasSeenPreloader');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasSeenPreloader]);

  const handlePreloaderComplete = () => {
    setHasSeenPreloader(true);
    setIsLoading(false);
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <>
      <Router>
        {/* Add ScrollToTop inside Router but outside Layout */}
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:groupId" element={<ServiceDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/copyright" element={<CopyrightPolicy />} />

          </Routes>
        </Layout>
      </Router>

      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
    </>
  );
}

export default App;