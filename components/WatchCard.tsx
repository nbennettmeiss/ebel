
import React from 'react';
import { Watch } from '../types';

interface WatchCardProps {
  watch: Watch;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-6">
        <img 
          src={watch.image} 
          alt={watch.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2">Specs</p>
          <div className="flex justify-between text-xs text-gray-600 uppercase">
            <span>{watch.specs.case}</span>
            <span>{watch.specs.waterResistance}</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">{watch.collection}</p>
        <h3 className="text-xl font-serif mb-2">{watch.name}</h3>
        <p className="text-amber-800 font-light">{watch.price}</p>
      </div>
    </div>
  );
};

export default WatchCard;
