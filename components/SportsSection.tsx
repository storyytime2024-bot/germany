
import React from 'react';

const sports = [
  { name: 'Fußball', sub: 'Bundesliga, Champions League, DFB-Pokal', img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=530&fit=crop&crop=center' },
  { name: 'Eishockey', sub: 'DEL, NHL, WM', img: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=400&h=530&fit=crop&crop=center' },
  { name: 'Formel 1', sub: 'Alle Rennen Live', img: 'https://images.unsplash.com/photo-1742744652734-d5ec6598b5da?w=400&h=530&fit=crop&crop=center' },
  { name: 'Kampfsport', sub: 'UFC, Boxen Live', img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=530&fit=crop&crop=center' },
  { name: 'Tennis', sub: 'Grand Slam, ATP', img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=530&fit=crop&crop=center' },
  { name: 'Basketball', sub: 'NBA, EuroLeague, BBL', img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&h=530&fit=crop&crop=center' }
];

const SportsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <span className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-4 block text-center">VON DER BUNDESLIGA BIS ZUR FORMEL 1</span>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">Alle Sportarten Live in 4K</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {sports.map((sport, idx) => (
          <div key={idx} className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-xl shadow-black/30">
            <img src={sport.img} alt={sport.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>
            {/* LIVE badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-600 px-2.5 py-1 rounded-lg shadow-lg shadow-red-600/40">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
              <span className="text-[9px] font-black text-white tracking-widest uppercase">LIVE</span>
            </div>
            {/* HD badge */}
            <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm px-2 py-1 rounded-md">
              <span className="text-[8px] font-black text-white tracking-wider">4K HD</span>
            </div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h4 className="font-black text-lg leading-tight">{sport.name}</h4>
              <p className="text-[10px] text-gray-300 font-semibold mt-1 tracking-wide">{sport.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsSection;
