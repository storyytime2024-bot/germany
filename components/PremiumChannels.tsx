
import React from 'react';

interface Channel {
  name: string;
  category: string;
  color: string;
  logo: string;
}

const ppvChannels: Channel[] = [
  { name: 'UFC Fight Pass', category: 'PPV', color: '#D20A0A', logo: 'https://www.google.com/s2/favicons?domain=ufc.com&sz=128' },
  { name: 'WWE Network', category: 'PPV', color: '#1A1A1A', logo: 'https://www.google.com/s2/favicons?domain=wwe.com&sz=128' },
  { name: 'DAZN', category: 'PPV', color: '#0C0C0C', logo: 'https://www.google.com/s2/favicons?domain=dazn.com&sz=128' },
  { name: 'Box Nation', category: 'PPV', color: '#E8272C', logo: 'https://www.google.com/s2/favicons?domain=boxnation.com&sz=128' },
  { name: 'Showtime', category: 'PPV', color: '#B71C1C', logo: 'https://www.google.com/s2/favicons?domain=sho.com&sz=128' },
  { name: 'Sky Sports', category: 'PPV', color: '#0D47A1', logo: 'https://www.google.com/s2/favicons?domain=skysports.com&sz=128' },
];

const vipChannels: Channel[] = [
  { name: 'Viaplay', category: 'VIP', color: '#6B21A8', logo: 'https://www.google.com/s2/favicons?domain=viaplay.com&sz=128' },
  { name: 'C More', category: 'VIP', color: '#00A3E0', logo: 'https://www.google.com/s2/favicons?domain=cmore.se&sz=128' },
  { name: 'Canal+', category: 'VIP', color: '#1A1A1A', logo: 'https://www.google.com/s2/favicons?domain=canalplus.com&sz=128' },
  { name: 'HBO Max', category: 'VIP', color: '#5822B4', logo: 'https://www.google.com/s2/favicons?domain=hbo.com&sz=128' },
  { name: 'Netflix', category: 'VIP', color: '#E50914', logo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=128' },
  { name: 'Disney+', category: 'VIP', color: '#113CCF', logo: 'https://www.google.com/s2/favicons?domain=disneyplus.com&sz=128' },
];

const nordicChannels: Channel[] = [
  { name: 'SVT 1', category: 'SE', color: '#1B5E20', logo: 'https://www.google.com/s2/favicons?domain=svt.se&sz=128' },
  { name: 'TV4', category: 'SE', color: '#C62828', logo: 'https://www.google.com/s2/favicons?domain=tv4.se&sz=128' },
  { name: 'TV3 Sverige', category: 'SE', color: '#0D47A1', logo: 'https://www.google.com/s2/favicons?domain=viafree.se&sz=128' },
  { name: 'Kanal 5', category: 'SE', color: '#4A148C', logo: 'https://www.google.com/s2/favicons?domain=discoveryplus.com&sz=128' },
  { name: 'SVT 2', category: 'SE', color: '#2E7D32', logo: 'https://www.google.com/s2/favicons?domain=svtplay.se&sz=128' },
  { name: 'Eurosport', category: 'SE', color: '#003A7D', logo: 'https://www.google.com/s2/favicons?domain=eurosport.com&sz=128' },
  { name: 'NRK 1', category: 'NO', color: '#1565C0', logo: 'https://www.google.com/s2/favicons?domain=nrk.no&sz=128' },
  { name: 'DR1', category: 'DK', color: '#B71C1C', logo: 'https://www.google.com/s2/favicons?domain=dr.dk&sz=128' },
  { name: 'YLE TV1', category: 'FI', color: '#00695C', logo: 'https://www.google.com/s2/favicons?domain=yle.fi&sz=128' },
  { name: 'Discovery+', category: 'SE', color: '#0277BD', logo: 'https://www.google.com/s2/favicons?domain=discoveryplus.com&sz=128' },
];

const ChannelCard: React.FC<{ channel: Channel }> = ({ channel }) => (
  <div
    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 md:px-5 md:py-4 shrink-0 hover:bg-slate-50 transition-colors"
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
      style={{ backgroundColor: channel.color }}
    >
      <img
        src={channel.logo}
        alt={channel.name}
        className="w-7 h-7 object-contain rounded-sm"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          if (target.parentElement) {
            target.parentElement.innerHTML = `<span style="font-size:11px;font-weight:800;color:white;text-align:center;line-height:1.1">${channel.name.split(' ')[0]}</span>`;
          }
        }}
      />
    </div>
    <div className="whitespace-nowrap">
      <span className="text-slate-800 font-bold text-xs md:text-sm block">{channel.name}</span>
      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{channel.category}</span>
    </div>
  </div>
);

interface ScrollRowProps {
  channels: Channel[];
  speed?: string;
  reverse?: boolean;
}

const ScrollRow: React.FC<ScrollRowProps> = ({ channels, speed = '35s', reverse = false }) => (
  <div className="overflow-hidden relative">
    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
    <div
      className="flex gap-3 md:gap-4 whitespace-nowrap"
      style={{
        animation: `${reverse ? 'scrollReverse' : 'scroll'} ${speed} linear infinite`,
      }}
    >
      {[...channels, ...channels].map((channel, i) => (
        <ChannelCard key={`${channel.name}-${i}`} channel={channel} />
      ))}
    </div>
  </div>
);

const PremiumChannels: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto px-6 text-center mb-12">
        <span className="px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 inline-block">EXKLUSIVT INNEHÅLL</span>
        <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-white">
          Premium & VIP <span className="gradient-text italic">Kanaler</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">PPV-evenemang, VIP-kanaler och Sveriges mest populära kanaler — allt ingår.</p>
      </div>

      <div className="space-y-4">
        <div className="container mx-auto px-6 mb-2">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-red-400">PAY-PER-VIEW</span>
        </div>
        <ScrollRow channels={ppvChannels} speed="30s" />

        <div className="container mx-auto px-6 mb-2 mt-8">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-purple-400">VIP KANALER</span>
        </div>
        <ScrollRow channels={vipChannels} speed="35s" reverse />

        <div className="container mx-auto px-6 mb-2 mt-8">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-indigo-400">MEST POPULÄRA I NORDEN</span>
        </div>
        <ScrollRow channels={nordicChannels} speed="40s" />
      </div>

      <div className="text-center mt-10">
        <p className="text-slate-500 text-sm font-medium">+ tusentals fler kanaler från hela världen ingår i alla paket</p>
      </div>

      <style>{`
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default PremiumChannels;
