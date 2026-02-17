
import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest uppercase mb-6 inline-block">MITGLIEDERVORTEILE</span>
      <h2 className="text-4xl md:text-6xl font-black mb-16">Es ist <span className="italic gradient-text underline decoration-white/20">"du wirst nie zurückgehen"</span> besser</h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="glass-card p-10 rounded-[32px] border-white/10 group hover:border-amber-500/50 transition-all">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
          </div>
          <h3 className="text-2xl font-black mb-4">WhatsApp Support</h3>
          <p className="text-gray-400 leading-relaxed">Erreiche uns direkt über WhatsApp für sofortige Hilfe bei Installation oder Fragen. Wir sind rund um die Uhr für dich da.</p>
        </div>

        <div className="glass-card p-10 rounded-[32px] border-white/10 group hover:border-blue-500/50 transition-all">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-2xl font-black mb-4">Festpreis</h3>
          <p className="text-gray-400 leading-relaxed">Keine versteckten Gebühren oder Überraschungen. Zahle den gleichen Festpreis für dein gesamtes Paket und spare Hunderte Euro jährlich.</p>
        </div>

        <div className="glass-card p-10 rounded-[32px] border-white/10 group hover:border-cyan-500/50 transition-all">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
            <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-2xl font-black mb-4">Schnelle Einrichtung</h3>
          <p className="text-gray-400 leading-relaxed">Zugang innerhalb von 5-15 Minuten. Kein Techniker nötig — wir führen dich durch die einfachen Schritte.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
