
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { SITE_COPY, COLORS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import CertGuide from './pages/CertGuide';
import RoadmapService from './pages/RoadmapService';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cert-guide" element={<CertGuide />} />
            <Route path="/roadmap-service" element={<RoadmapService />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
