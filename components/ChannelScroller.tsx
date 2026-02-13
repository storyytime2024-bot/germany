
import React from 'react';

const SCROLL_CHANNELS = [
  { name: 'SVT 1', color: '#1B5E20' },
  { name: 'SVT 2', color: '#2E7D32' },
  { name: 'TV4', color: '#C62828' },
  { name: 'TV3', color: '#0D47A1' },
  { name: 'Kanal 5', color: '#4A148C' },
  { name: 'TV6', color: '#E65100' },
  { name: 'Viaplay', color: '#6B21A8' },
  { name: 'C More', color: '#00A3E0' },
  { name: 'Canal+', color: '#1A1A1A' },
  { name: 'HBO Max', color: '#5822B4' },
  { name: 'Netflix', color: '#E50914' },
  { name: 'Disney+', color: '#113CCF' },
  { name: 'NRK 1', color: '#1565C0' },
  { name: 'DR1', color: '#B71C1C' },
  { name: 'YLE', color: '#00695C' },
  { name: 'Discovery+', color: '#0277BD' },
  { name: 'Eurosport', color: '#003A7D' },
  { name: 'Sky Sports', color: '#0D47A1' },
  { name: 'UFC', color: '#D20A0A' },
  { name: 'WWE', color: '#1A1A1A' },
  { name: 'DAZN', color: '#0C0C0C' },
  { name: 'Showtime', color: '#B71C1C' },
  { name: 'TV8', color: '#F57C00' },
  { name: 'Kanal 9', color: '#7B1FA2' },
  { name: 'Kanal 11', color: '#00838F' },
  { name: 'MTV', color: '#FFD600' },
  { name: 'Fox', color: '#FF6F00' },
  { name: 'BBC', color: '#BB1919' },
  { name: 'Nat Geo', color: '#FFAB00' },
  { name: 'History', color: '#9E9E9E' },
];

const ChannelScroller: React.FC = () => {
  return (
    <div className="overflow-hidden mb-12">
      {/* Row 1 - scrolls left */}
      <div className="flex mb-4">
        <div className="flex animate-scroll-fast gap-4 items-center">
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              {SCROLL_CHANNELS.slice(0, 15).map((ch, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-all"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black text-white shrink-0"
                    style={{ backgroundColor: ch.color }}
                  >
                    {ch.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-slate-700 whitespace-nowrap">{ch.name}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Row 2 - scrolls right */}
      <div className="flex">
        <div className="flex animate-scroll-reverse gap-4 items-center">
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              {SCROLL_CHANNELS.slice(15).map((ch, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-all"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black text-white shrink-0"
                    style={{ backgroundColor: ch.color }}
                  >
                    {ch.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-slate-700 whitespace-nowrap">{ch.name}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelScroller;
