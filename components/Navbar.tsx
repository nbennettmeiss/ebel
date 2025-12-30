
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex space-x-8 items-center text-sm uppercase tracking-[0.2em]">
          <a href="#collections" className="hover:text-amber-600 transition-colors">Collections</a>
          <a href="#heritage" className="hover:text-amber-600 transition-colors">Heritage</a>
        </div>
        
        <div className="text-3xl font-serif tracking-[0.3em] font-light">
          EBEL
        </div>

        <div className="flex space-x-8 items-center text-sm uppercase tracking-[0.2em]">
          <a href="#collections" className="hover:text-amber-600 transition-colors">Discover</a>
          <button className="bg-amber-600 text-white px-6 py-2 hover:bg-amber-700 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
