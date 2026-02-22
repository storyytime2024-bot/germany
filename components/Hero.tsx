
import React from 'react';

const Hero: React.FC = () => {
  const phoneNumber = "447449708976";
  const contactMessage = encodeURIComponent("Hallo, ich möchte mehr über HAKUNA TV und eure IPTV-Pakete erfahren.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${contactMessage}`;

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#020617]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Jetzt mit Bundesliga 2025/26 & 4K Sport</span>
            </div>

            <h1 className="text-5xl md:text-[80px] font-black leading-[0.95] mb-8 tracking-tighter">
              BESTES IPTV <br />
              <span className="gradient-text italic">IN DEUTSCHLAND & EUROPA.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Erlebe die Zukunft des Fernsehens. Über 65.000 Sender und das größte Angebot an Filmen und Serien direkt auf deinem Smart-TV.
            </p>

            {/* Country badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {[
                { flag: '\u{1F1E9}\u{1F1EA}', name: 'Deutschland' },
                { flag: '\u{1F1E6}\u{1F1F9}', name: 'Österreich' },
                { flag: '\u{1F1E8}\u{1F1ED}', name: 'Schweiz' },
                { flag: '\u{1F1F3}\u{1F1F1}', name: 'Niederlande' },
                { flag: '\u{1F1E7}\u{1F1EA}', name: 'Belgien' },
              ].map((c) => (
                <span key={c.name} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-slate-300">
                  <span className="text-lg">{c.flag}</span>
                  {c.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
              <a href="#preise" className="px-10 py-5 bg-white text-black font-black rounded-2xl text-lg hover:bg-slate-200 transition-all shadow-2xl shadow-white/5 active:scale-95">
                Unsere Angebote ansehen
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-red-600/10 backdrop-blur-md text-white font-black rounded-2xl text-lg border border-red-600/40 hover:bg-red-600/20 transition-all flex items-center justify-center gap-3 group active:scale-95">
                <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Kontaktiere Uns
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
               <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                 <span className="text-red-400">01</span> Keine Vertragsbindung
               </div>
               <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                 <span className="text-red-400">02</span> HD & 4K Qualität
               </div>
               <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                 <span className="text-red-400">03</span> 24/7 Support
               </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
               {/* Decorative floating elements */}
               <div className="absolute -top-20 -right-10 w-40 h-40 bg-red-600/30 blur-[60px] rounded-full animate-bounce"></div>

               <div className="glass-card p-10 rounded-[48px] border-white/10 shadow-2xl shadow-red-500/10 relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>
                  </div>

                  <div className="mb-10">
                    <span className="text-red-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">PREMIUM ZUGANG</span>
                    <h2 className="text-4xl font-black mb-4 tracking-tight">Unterhaltung weltweit</h2>
                    <p className="text-slate-400 font-medium">Verbinde bis zu 4 Geräte gleichzeitig und schau alles von deutschem TV bis internationalem Sport.</p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {[
                      { icon: '🎬', text: '175.000+ Filme & Serien' },
                      { icon: '⚽', text: 'Alle Live-Sportarten (4K)' },
                      { icon: '📡', text: 'Stabilste Server in Deutschland & Europa' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm font-bold text-slate-200">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#preise" className="flex items-center justify-center gap-3 w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-slate-200 transition-transform active:scale-95 group shadow-xl">
                    Jetzt Mitglied werden
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
