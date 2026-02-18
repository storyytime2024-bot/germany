
import React, { useState, useEffect } from 'react';
import { PRICING, VIP_PRICING } from '../constants';

function formatPrice(price: number): { whole: string; decimals: string; symbol: string; subtext: string } {
  const whole = Math.floor(price);
  const decimals = (price % 1).toFixed(2).slice(1);
  return { whole: whole.toString(), decimals, symbol: '\u20AC', subtext: 'EUR inkl. MwSt.' };
}

const Pricing: React.FC = () => {
  const [devices, setDevices] = useState(1);
  const [isVip, setIsVip] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 22, seconds: 12 });
  const phoneNumber = "447449708976";
  const activePricing = isVip ? VIP_PRICING : PRICING;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 inline-block">WÄHLE DEIN PAKET</span>
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">Preise angepasst <br /><span className="gradient-text italic">für dich</span></h2>

        <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-slate-900/50 backdrop-blur-md p-4 rounded-3xl mb-12 border border-white/5">
          <div className="flex items-center gap-2 text-red-400 font-black text-[10px] tracking-widest uppercase sm:mr-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
            Zeitlich begrenzt:
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((val, i) => (
              <React.Fragment key={i}>
                <div className="bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl min-w-[42px] sm:min-w-[50px]">
                  <span className="text-lg sm:text-xl font-black block text-white">{val.toString().padStart(2, '0')}</span>
                </div>
                {i < 2 && <span className="font-bold opacity-30 text-white">:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* VIP Toggle */}
        <div className="bg-slate-900/80 p-1.5 rounded-2xl flex max-w-xs mx-auto mb-8 border border-white/5">
          <button
            onClick={() => setIsVip(false)}
            className={`flex-1 py-3.5 rounded-xl font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 ${!isVip ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Standard
          </button>
          <button
            onClick={() => setIsVip(true)}
            className={`flex-1 py-3.5 rounded-xl font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 ${isVip ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-xl shadow-amber-500/20' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            VIP
          </button>
        </div>

        {isVip && (
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
            <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em]">
              Dedizierter Server & Prioritäts-Support
            </p>
          </div>
        )}

        <div className="bg-slate-900/80 p-1.5 rounded-2xl grid grid-cols-2 max-w-sm mx-auto mb-16 border border-white/5 gap-1.5">
          {[1, 2, 3, 4].map(num => (
            <button
              key={num}
              onClick={() => setDevices(num)}
              className={`py-3.5 rounded-xl font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 ${devices === num ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {num} Gerät{num > 1 ? 'e' : ''}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 max-w-5xl mx-auto">
        {activePricing[devices].map((plan) => {
          const message = encodeURIComponent(`Hallo, ich möchte ${isVip ? 'VIP ' : ''}${plan.duration} für ${devices} Gerät${devices > 1 ? 'e' : ''} kaufen. (${plan.price.toFixed(2)}€)`);
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

          return (
            <div key={plan.id} className={`relative ${plan.featured ? 'pt-6' : 'pt-4'}`}>
              {/* Savings Tag */}
              {plan.savings && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-20 ${isVip ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 text-black shadow-amber-500/40' : 'bg-emerald-500 text-white shadow-emerald-500/30'} px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-xl whitespace-nowrap flex items-center gap-1.5`}>
                  {isVip && <span>👑</span>}
                  {plan.savings}
                </div>
              )}

              {/* The Main Card */}
              <div
                className={`p-6 sm:p-7 lg:p-8 rounded-[24px] sm:rounded-[28px] relative transition-all duration-500 group flex flex-col shadow-2xl h-full overflow-hidden ${isVip ? (plan.featured ? 'bg-gradient-to-b from-[#1a1207] via-[#0f0d08] to-[#080604] text-white z-10 ring-2 ring-amber-500/60 lg:scale-105 lg:ring-4 lg:ring-offset-4 lg:ring-offset-[#020617]' : 'bg-gradient-to-b from-[#141210] via-[#0c0a07] to-[#080604] text-white hover:-translate-y-2 ring-1 ring-amber-900/30') : (plan.featured ? 'bg-white text-slate-900 z-10 ring-2 ring-red-500/40 lg:scale-105 lg:ring-4 lg:ring-offset-4 lg:ring-offset-[#020617]' : 'bg-white text-slate-900 hover:-translate-y-2')}`}
              >
                {/* Corner Ribbon for Featured Pack */}
                {plan.featured && (
                  <div className="absolute top-0 right-0 w-28 h-28 sm:w-32 sm:h-32 pointer-events-none z-10 overflow-hidden rounded-tr-[24px] sm:rounded-tr-[28px]">
                    <div className={`${isVip ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black' : 'bg-red-600 text-white'} text-[9px] sm:text-[10px] font-black py-1.5 sm:py-2 w-[140px] sm:w-[160px] absolute top-5 sm:top-6 -right-9 sm:-right-11 rotate-45 shadow-lg uppercase tracking-[0.15em] text-center leading-tight flex flex-col items-center justify-center`}>
                      {isVip ? <>VIP<br/>EMPFOHLEN</> : <>MEIST<br/>VERKAUFT</>}
                    </div>
                  </div>
                )}

                <div className="mb-6 sm:mb-8">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-2 ${isVip ? (plan.featured ? 'text-amber-400' : 'text-amber-500/60') : (plan.featured ? 'text-red-600' : 'text-slate-400')}`}>{plan.label}</span>
                  <h3 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${isVip ? 'text-white' : 'text-slate-900'}`}>{plan.duration}</h3>
                </div>

                <div className="mb-6 sm:mb-8 relative">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`line-through text-base sm:text-lg font-bold ${isVip ? 'text-amber-500/30' : 'text-slate-400'}`}>
                        {plan.originalPrice.toFixed(2)} €
                      </span>
                    </div>
                  )}
                  {(() => {
                    const fmt = formatPrice(plan.price);
                    return (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none ${isVip ? 'text-white' : 'text-slate-900'}`}>{fmt.whole}</span>
                          <span className={`text-xl sm:text-2xl font-black ${isVip ? 'text-amber-500/50' : 'text-slate-400'}`}>{fmt.decimals}</span>
                          <span className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase ${isVip ? 'text-amber-400' : 'text-red-600'}`}>{fmt.symbol}</span>
                        </div>
                        <p className={`text-[10px] mt-2 sm:mt-3 font-medium italic uppercase tracking-wider ${isVip ? 'text-amber-500/40' : 'text-slate-400'}`}>{fmt.subtext}</p>
                      </>
                    );
                  })()}
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                  {(isVip ? [
                    `VIP-Zugang auf ${devices} Gerät${devices > 1 ? 'en' : ''}`,
                    '85.000+ Sender (Live)',
                    '200.000+ Filme & Serien',
                    'Alle Sportpakete inklusive',
                    'PPV Events: UFC, Boxen, WWE',
                    '4K / Ultra HD verfügbar',
                    'Anti-Freeze Technologie',
                    'Dedizierter VIP-Server',
                    'Prioritäts-Support 24/7',
                  ] : [
                    `Voller Zugang auf ${devices} Gerät${devices > 1 ? 'en' : ''}`,
                    '35.000+ Sender (Live)',
                    '98.000+ Filme & Serien',
                    'Alle Sportpakete inklusive',
                    'FHD / HD / SD verfügbar',
                    'Keine Vertragsbindung',
                  ]).map((feature, i) => (
                    <div key={i} className={`flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold leading-snug ${isVip ? 'text-gray-300' : 'text-slate-700'}`}>
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${isVip ? 'bg-amber-500/10' : 'bg-red-50'} flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${isVip ? 'text-amber-400' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 sm:py-5 rounded-2xl font-black text-sm sm:text-base text-center transition-all duration-300 transform active:scale-95 ${isVip ? (plan.featured ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black hover:from-amber-600 hover:to-yellow-500 shadow-xl shadow-amber-500/30' : 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/20') : (plan.featured ? 'bg-red-600 text-white hover:bg-red-700 shadow-xl shadow-red-600/20' : 'bg-slate-900 text-white hover:bg-black shadow-lg shadow-black/10')}`}
                >
                  Jetzt starten
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-x-16 gap-y-8 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-3 hover:text-slate-300 transition-colors cursor-default">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Schnellaktivierung
        </div>
        <div className="flex items-center gap-3 hover:text-slate-300 transition-colors cursor-default">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Sichere Verbindung
        </div>
        <div className="flex items-center gap-3 hover:text-slate-300 transition-colors cursor-default">
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          24/7 Premium Support
        </div>
      </div>
    </div>
  );
};

export default Pricing;
