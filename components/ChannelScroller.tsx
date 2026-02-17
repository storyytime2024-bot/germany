
import React from 'react';

const SCROLL_CHANNELS = [
  { name: 'ARD', color: '#003B80' },
  { name: 'ZDF', color: '#FA7D19' },
  { name: 'RTL', color: '#E4002B' },
  { name: 'ProSieben', color: '#E6000F' },
  { name: 'Sat.1', color: '#009EE3' },
  { name: 'VOX', color: '#BE1622' },
  { name: 'Sky DE', color: '#003580' },
  { name: 'DAZN', color: '#0C0C0C' },
  { name: 'RTL+', color: '#E4002B' },
  { name: 'Joyn', color: '#1E1E1E' },
  { name: 'Netflix', color: '#E50914' },
  { name: 'Disney+', color: '#113CCF' },
  { name: 'Sport1', color: '#FFD600' },
  { name: 'Kabel 1', color: '#E30613' },
  { name: 'RTL II', color: '#00A3E0' },
  { name: 'Eurosport', color: '#003A7D' },
  { name: 'Sky Sports', color: '#0D47A1' },
  { name: 'UFC', color: '#D20A0A' },
  { name: 'WWE', color: '#1A1A1A' },
  { name: 'Showtime', color: '#B71C1C' },
  { name: 'N-TV', color: '#E4002B' },
  { name: 'WELT', color: '#003E7E' },
  { name: 'Tele 5', color: '#7B1FA2' },
  { name: 'MTV', color: '#FFD600' },
  { name: 'Sixx', color: '#E91E63' },
  { name: 'BBC', color: '#BB1919' },
  { name: 'Nat Geo', color: '#FFAB00' },
  { name: 'History', color: '#9E9E9E' },
  { name: 'NITRO', color: '#FF6F00' },
  { name: 'WDR', color: '#003B80' },
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
