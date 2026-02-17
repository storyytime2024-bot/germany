
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
  { name: 'Sky Sport', category: 'PPV', color: '#0D47A1', logo: 'https://www.google.com/s2/favicons?domain=skysports.com&sz=128' },
];

const vipChannels: Channel[] = [
  { name: 'Sky Deutschland', category: 'VIP', color: '#003580', logo: 'https://www.google.com/s2/favicons?domain=sky.de&sz=128' },
  { name: 'DAZN DE', category: 'VIP', color: '#0C0C0C', logo: 'https://www.google.com/s2/favicons?domain=dazn.com&sz=128' },
  { name: 'RTL+', category: 'VIP', color: '#E4002B', logo: 'https://www.google.com/s2/favicons?domain=rtlplus.com&sz=128' },
  { name: 'Joyn', category: 'VIP', color: '#1E1E1E', logo: 'https://www.google.com/s2/favicons?domain=joyn.de&sz=128' },
  { name: 'Netflix', category: 'VIP', color: '#E50914', logo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=128' },
  { name: 'Disney+', category: 'VIP', color: '#113CCF', logo: 'https://www.google.com/s2/favicons?domain=disneyplus.com&sz=128' },
];

const germanChannels: Channel[] = [
  { name: 'ARD / Das Erste', category: 'DE', color: '#003B80', logo: 'https://www.google.com/s2/favicons?domain=ard.de&sz=128' },
  { name: 'ZDF', category: 'DE', color: '#FA7D19', logo: 'https://www.google.com/s2/favicons?domain=zdf.de&sz=128' },
  { name: 'RTL', category: 'DE', color: '#E4002B', logo: 'https://www.google.com/s2/favicons?domain=rtl.de&sz=128' },
  { name: 'ProSieben', category: 'DE', color: '#E6000F', logo: 'https://www.google.com/s2/favicons?domain=prosieben.de&sz=128' },
  { name: 'Sat.1', category: 'DE', color: '#009EE3', logo: 'https://www.google.com/s2/favicons?domain=sat1.de&sz=128' },
  { name: 'VOX', category: 'DE', color: '#BE1622', logo: 'https://www.google.com/s2/favicons?domain=vox.de&sz=128' },
  { name: 'Kabel 1', category: 'DE', color: '#E30613', logo: 'https://www.google.com/s2/favicons?domain=kabeleins.de&sz=128' },
  { name: 'RTL II', category: 'DE', color: '#00A3E0', logo: 'https://www.google.com/s2/favicons?domain=rtl2.de&sz=128' },
  { name: 'DAZN', category: 'DE', color: '#0C0C0C', logo: 'https://www.google.com/s2/favicons?domain=dazn.com&sz=128' },
  { name: 'Sport1', category: 'DE', color: '#FFD600', logo: 'https://www.google.com/s2/favicons?domain=sport1.de&sz=128' },
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
        <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 inline-block">EXKLUSIVER INHALT</span>
        <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-white">
          Premium & VIP <span className="gradient-text italic">Sender</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">PPV-Events, VIP-Sender und Deutschlands beliebteste Sender — alles inklusive.</p>
      </div>

      <div className="space-y-4">
        <div className="container mx-auto px-6 mb-2">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-red-400">PAY-PER-VIEW</span>
        </div>
        <ScrollRow channels={ppvChannels} speed="30s" />

        <div className="container mx-auto px-6 mb-2 mt-8">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-amber-400">VIP SENDER</span>
        </div>
        <ScrollRow channels={vipChannels} speed="35s" reverse />

        <div className="container mx-auto px-6 mb-2 mt-8">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-red-400">BELIEBTESTE IN DEUTSCHLAND</span>
        </div>
        <ScrollRow channels={germanChannels} speed="40s" />
      </div>

      <div className="text-center mt-10">
        <p className="text-slate-500 text-sm font-medium">+ tausende weitere Sender aus der ganzen Welt in allen Paketen enthalten</p>
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
