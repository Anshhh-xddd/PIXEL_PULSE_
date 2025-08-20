import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function ScrollToSectionOnRouteChange() {
  const location = useLocation();
  React.useEffect(() => {
    const state = (location.state as any) || {};
    if (state.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    } else {
      // No specific section requested: ensure each route change starts at the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loader onFinish={handleLoadingFinish} />;
  }

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <ScrollToSectionOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;