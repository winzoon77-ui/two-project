
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_COPY, COLORS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight" style={{ color: isScrolled ? COLORS.primary : (location.pathname === '/' ? '#FFFFFF' : COLORS.primary) }}>
          {SITE_COPY.header.brand}
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {SITE_COPY.header.nav.map((item) => (
            <Link 
              key={item.to} 
              to={item.to} 
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link 
          to="/contact" 
          className="bg-primary px-5 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-all shadow-lg"
          style={{ backgroundColor: COLORS.secondary }}
        >
          {SITE_COPY.header.headerCta}
        </Link>
      </div>
    </header>
  );
};

export default Header;
