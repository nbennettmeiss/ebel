import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WatchCard from './components/WatchCard';
import WatchConcierge from './components/WatchConcierge';
import { WATCHES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Collections Section */}
        <section id="collections" className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <div className="max-w-xl">
                <p className="text-amber-700 uppercase tracking-[0.3em] text-xs font-bold mb-4">The Selection</p>
                <h2 className="text-5xl font-serif mb-6">Iconic Collections</h2>
                <p className="text-gray-500 font-light leading-relaxed">
                  Discover timepieces that transcend trends. Each EBEL watch is a testament to our philosophy of blending architectural design with precise engineering.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <button className="text-sm uppercase tracking-widest border-b border-black pb-2 hover:text-amber-700 hover:border-amber-700 transition-all">
                  View All Watches
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {WATCHES.map(watch => (
                <WatchCard key={watch.id} watch={watch} />
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section id="heritage" className="relative py-32 overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <p className="text-amber-700 uppercase tracking-[0.3em] text-xs font-bold mb-4">Our Legacy</p>
              <h2 className="text-5xl font-serif mb-8 italic">Born in the <br /> Cradle of Horology</h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  Founded in 1911 by Eugene Blum and Alice Levy in La Chaux-de-Fonds, EBEL was built on the union of masculine and feminine perspectives.
                </p>
                <p>
                  Known as "The Architects of Time," our heritage is deeply rooted in the belief that beauty and function are inseparable, a philosophy that continues to drive every screw and gear in our manufacture.
                </p>
              </div>
              <div className="mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800" 
                  alt="Watch Detail" 
                  className="rounded shadow-xl grayscale"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 border border-stone-200 -z-10 transition-transform duration-500 group-hover:scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Swiss Workshop" 
                className="w-full h-[700px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Lifestyle/Banner Section */}
        <section className="h-[600px] relative flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1517466100140-5e3646849842?auto=format&fit=crop&q=80&w=1920" 
            alt="Lifestyle" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Elegance is Architectural</h2>
            <button className="bg-white text-black px-12 py-4 uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all duration-300">
              Find a Boutique
            </button>
          </div>
        </section>
      </main>

      <WatchConcierge />

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-serif tracking-[0.3em] font-light mb-8">EBEL</div>
              <p className="text-gray-400 max-w-sm font-light leading-relaxed">
                Join our circle of excellence. Subscribe to receive exclusive updates from the world of EBEL.
              </p>
              <div className="mt-8 flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-amber-500 w-full"
                />
                <button className="ml-4 uppercase text-xs tracking-widest border border-white/30 px-6 hover:bg-white hover:text-black transition-all">
                  Join
                </button>
              </div>
            </div>
            <div>
              <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-amber-500">Service</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">After Sales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase text-xs tracking-widest font-bold mb-6 text-amber-500">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Heritage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">The Manufacture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
            <p>&copy; {new Date().getFullYear()} EBEL. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;