
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/ebel-hero/1920/1080" 
          alt="Luxury Watch Detail" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-amber-500 uppercase tracking-[0.5em] mb-6 text-sm">Since 1911</p>
        <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
          The Architects <br /> of Time
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-300 font-light mb-12 leading-relaxed">
          Crafting moments of timeless elegance through architectural precision and Swiss mastery.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#collections" className="border border-white px-10 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Explore Collections
          </a>
          <a href="#heritage" className="bg-amber-600 px-10 py-4 uppercase tracking-widest hover:bg-amber-700 transition-all duration-300">
            Our Heritage
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
