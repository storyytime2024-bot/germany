
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import HomePage from './pages/HomePage';
import KanalerPage from './pages/KanalerPage';
import FAQPage from './pages/FAQPage';
import PriserPage from './pages/PriserPage';
import ResellerPage from './pages/ResellerPage';
import BlogPage from './pages/BlogPage';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen text-white bg-[#020617] selection:bg-indigo-500 selection:text-white">
        <Navbar scrolled={scrolled} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kanaler" element={<KanalerPage />} />
            <Route path="/priser" element={<PriserPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/reseller" element={<ResellerPage />} />
            <Route path="/blogg" element={<BlogPage />} />
          </Routes>
        </main>

        <Footer />
        <LanguageSwitcher floating />
      </div>
    </BrowserRouter>
  );
};

export default App;
