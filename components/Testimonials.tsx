
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest uppercase mb-6 inline-block">23000+ NÖJDA KUNDER</span>
      <h2 className="text-4xl md:text-6xl font-black mb-16">#1 IPTV i Sverige enligt våra kunder</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={`flex items-start gap-4 ${t.side === 'right' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${t.side === 'left' ? 'bg-blue-600' : 'bg-fuchsia-600'}`}>
              {t.avatar}
            </div>
            <div className={`max-w-[70%]`}>
              <span className={`block text-xs text-gray-400 mb-1 ${t.side === 'right' ? 'text-right' : 'text-left'}`}>{t.name}</span>
              <div className={`p-4 rounded-2xl text-left ${t.side === 'left' ? 'bg-emerald-800 rounded-tl-none' : 'bg-white/10 rounded-tr-none'}`}>
                <p className="text-sm md:text-base mb-2 leading-relaxed">{t.text}</p>
                <div className="flex items-center justify-end gap-1 opacity-50">
                  <span className="text-[10px]">{t.time}</span>
                  <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8 block">BETALNINGSMETODER</span>
        <h3 className="text-3xl font-black mb-10">Betala som du vill</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { name: 'Swish', icon: <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none"><path d="M36.5 11.5c-3.5-3.5-8.2-4.8-12.5-3.8l3.2 3.2c2.5-.2 5 .8 6.8 2.6 3.5 3.5 3.5 9.2 0 12.7l-6.4 6.4-3.2-3.2-6.4 6.4c3.5 3.5 8.2 4.8 12.5 3.8l-3.2-3.2c-2.5.2-5-.8-6.8-2.6-3.5-3.5-3.5-9.2 0-12.7l6.4-6.4 3.2 3.2 6.4-6.4z" fill="#4AA84B"/><path d="M11.5 36.5c3.5 3.5 8.2 4.8 12.5 3.8l-3.2-3.2c-2.5.2-5-.8-6.8-2.6-3.5-3.5-3.5-9.2 0-12.7l6.4-6.4 3.2 3.2 6.4-6.4c-3.5-3.5-8.2-4.8-12.5-3.8l3.2 3.2c2.5-.2 5 .8 6.8 2.6 3.5 3.5 3.5 9.2 0 12.7l-6.4 6.4-3.2-3.2-6.4 6.4z" fill="#E21F26"/></svg> },
            { name: 'Visa', icon: <svg className="w-10 h-8" viewBox="0 0 60 40" fill="none"><rect width="60" height="40" rx="6" fill="#1A1F71"/><text x="30" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif">VISA</text></svg> },
            { name: 'Mastercard', icon: <svg className="w-10 h-8" viewBox="0 0 60 40" fill="none"><circle cx="23" cy="20" r="12" fill="#EB001B"/><circle cx="37" cy="20" r="12" fill="#F79E1B"/><path d="M30 11.5a12 12 0 010 17 12 12 0 000-17z" fill="#FF5F00"/></svg> },
            { name: 'Klarna', icon: <svg className="w-10 h-8" viewBox="0 0 60 40" fill="none"><rect width="60" height="40" rx="6" fill="#FFB3C7"/><text x="30" y="25" textAnchor="middle" fill="#0A0B09" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Klarna.</text></svg> },
            { name: 'Bank', icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4"/></svg> },
            { name: 'PayPal', icon: <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none"><path d="M17.4 38h-5.8c-.5 0-.9-.4-.8-.9L15.2 11c.1-.4.4-.7.8-.7h10.8c3.6 0 6.5 1.2 7.5 4.5.6 1.9.5 3.6-.1 5.1-1.5 4-5.3 6.1-10 6.1h-2.7c-.5 0-.9.4-1 .8L19 37.2c-.1.4-.4.8-.9.8h-.7z" fill="#253B80"/><path d="M35.4 16c0 .3-.1.6-.1.9-1.5 5-5.6 7.2-11.1 7.2h-2.8c-.7 0-1.2.5-1.3 1.1l-1.8 11.2c-.1.4.3.8.7.8h4.8c.6 0 1-.4 1.1-.9l.9-5.5c.1-.5.6-.9 1.1-.9h.7c4.5 0 8-1.8 9-7.1.4-2.2.2-4-1-5.3-.3-.5-.7-.9-1.2-1.5z" fill="#179BD7"/></svg> },
          ].map(method => (
            <div key={method.name} className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center gap-3 w-32 md:w-40 hover:border-white/30 transition-all cursor-default">
              <div className="w-12 h-12 flex items-center justify-center">
                {method.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{method.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
