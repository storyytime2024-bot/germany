
import React, { useState, useEffect } from 'react';
import { PRICING } from '../constants';

const SEK_TO_EUR = 0.085;

function getIsEuro(): boolean {
  const match = document.cookie.match(/googtrans=\/sv\/(\w+)/);
  return !!match && match[1] !== 'sv';
}

function convertPrice(sekPrice: number, isEuro: boolean): number {
  if (!isEuro) return sekPrice;
  return Math.round(sekPrice * SEK_TO_EUR * 100) / 100;
}

function formatPrice(price: number, isEuro: boolean): { whole: string; decimals: string; symbol: string; subtext: string } {
  if (isEuro) {
    const converted = convertPrice(price, true);
    const whole = Math.floor(converted);
    const decimals = (converted % 1).toFixed(2).slice(1); // ".99" etc
    return { whole: whole.toString(), decimals, symbol: '\u20AC', subtext: 'EUR incl. VAT' };
  }
  return { whole: Math.floor(price).toString(), decimals: ',99', symbol: 'KR', subtext: 'Svenska Kronor inkl. moms' };
}

const Pricing: React.FC = () => {
  const [devices, setDevices] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 22, seconds: 12 });
  const [isEuro, setIsEuro] = useState(false);
  const phoneNumber = "447449708976";

  useEffect(() => {
    setIsEuro(getIsEuro());
    // Watch for Google Translate changes (it modifies the html lang attribute)
    const observer = new MutationObserver(() => {
      setIsEuro(getIsEuro());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'class'] });
    // Also poll briefly in case cookie changes without attribute change
    const poll = setInterval(() => setIsEuro(getIsEuro()), 2000);
    return () => { observer.disconnect(); clearInterval(poll); };
  }, []);

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
        <span className="px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 inline-block">VÄLJ DITT PAKET</span>
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">Priser anpassade <br /><span className="gradient-text italic">för dig</span></h2>
        
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-slate-900/50 backdrop-blur-md p-4 rounded-3xl mb-12 border border-white/5">
          <div className="flex items-center gap-2 text-red-400 font-black text-[10px] tracking-widest uppercase sm:mr-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
            Tidsbegränsat:
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

        <div className="bg-slate-900/80 p-1.5 rounded-2xl flex max-w-lg mx-auto mb-16 border border-white/5">
          {[1, 2, 3, 4].map(num => (
            <button 
              key={num}
              onClick={() => setDevices(num)}
              className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${devices === num ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <span className="hidden sm:inline">{num} Apparat{num > 1 ? 'er' : ''}</span>
              <span className="sm:hidden">{num}st</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 max-w-7xl mx-auto">
        {PRICING[devices].map((plan) => {
          const message = encodeURIComponent(`Hej, jag skulle vilja köpa ${plan.duration} för ${devices} apparat${devices > 1 ? 'er' : ''}.`);
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

          return (
            <div key={plan.id} className={`relative ${plan.featured ? 'pt-6' : 'pt-4'}`}>
              {/* Savings Tag */}
              {plan.savings && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-xl shadow-emerald-500/30 whitespace-nowrap">
                  {plan.savings}
                </div>
              )}

              {/* The Main Card */}
              <div
                className={`bg-white text-slate-900 p-6 sm:p-7 lg:p-8 rounded-[24px] sm:rounded-[28px] relative transition-all duration-500 group flex flex-col shadow-2xl h-full overflow-hidden ${plan.featured ? 'z-10 ring-2 ring-indigo-500/40 lg:scale-105 lg:ring-4 lg:ring-offset-4 lg:ring-offset-[#020617]' : 'hover:-translate-y-2'}`}
              >
                {/* Corner Ribbon for Featured Pack */}
                {plan.featured && (
                  <div className="absolute top-0 right-0 w-28 h-28 sm:w-32 sm:h-32 pointer-events-none z-10 overflow-hidden rounded-tr-[24px] sm:rounded-tr-[28px]">
                    <div className="bg-[#5850ec] text-white text-[9px] sm:text-[10px] font-black py-1.5 sm:py-2 w-[140px] sm:w-[160px] absolute top-5 sm:top-6 -right-9 sm:-right-11 rotate-45 shadow-lg uppercase tracking-[0.15em] text-center leading-tight flex flex-col items-center justify-center">
                      MEST<br/>SÅLDA
                    </div>
                  </div>
                )}

                <div className="mb-6 sm:mb-8">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-2 ${plan.featured ? 'text-indigo-600' : 'text-slate-400'}`}>{plan.label}</span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">{plan.duration}</h3>
                </div>

                <div className="mb-6 sm:mb-8">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-slate-400 line-through text-base sm:text-lg font-bold">
                        {isEuro
                          ? `${convertPrice(plan.originalPrice, true).toFixed(2)} \u20AC`
                          : `${Math.floor(plan.originalPrice)} kr`
                        }
                      </span>
                    </div>
                  )}
                  {(() => {
                    const fmt = formatPrice(plan.price, isEuro);
                    return (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-none">{fmt.whole}</span>
                          <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-black text-slate-400">{fmt.decimals}</span>
                            <span className="text-[10px] font-bold text-slate-500 leading-none uppercase">{fmt.symbol}</span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-[10px] mt-2 sm:mt-3 font-medium italic uppercase tracking-wider">{fmt.subtext}</p>
                      </>
                    );
                  })()}
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                  {[
                    `Full tillgång på ${devices} enhet${devices > 1 ? 'er' : ''}`,
                    '65,000+ Kanaler (Live)',
                    '175,000+ Filmer & Serier',
                    'Alla sportpaket inkluderade',
                    '4K / Ultra HD tillgängligt',
                    'Anti-Freeze teknologi',
                    'Ingen bindningstid'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700 font-semibold leading-snug">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 sm:py-5 rounded-2xl font-black text-sm sm:text-base text-center transition-all duration-300 transform active:scale-95 ${plan.featured ? 'bg-[#5850ec] text-white hover:bg-indigo-700 shadow-xl shadow-indigo-600/20' : 'bg-slate-900 text-white hover:bg-black shadow-lg shadow-black/10'}`}
                >
                  Starta nu
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-x-16 gap-y-8 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-3 hover:text-slate-300 transition-colors cursor-default">
          <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Snabbtaktivering
        </div>
        <div className="flex items-center gap-3 hover:text-slate-300 transition-colors cursor-default">
          <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Säker Anslutning
        </div>
        <div className="flex items-center gap-3 hover:text-slate-300 transition-colors cursor-default">
          <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          24/7 Premium Support
        </div>
      </div>
    </div>
  );
};

export default Pricing;
