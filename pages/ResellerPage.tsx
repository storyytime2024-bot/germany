
import React, { useState } from 'react';

const ResellerPage: React.FC = () => {
  const phoneNumber = "447449708976";
  const resellerMessage = encodeURIComponent("Hallo, ich interessiere mich für euer Reseller-Programm bei HAKUNA TV.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${resellerMessage}`;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const resellerPlans = [
    { credits: 20, price: 49.99, oldPrice: 80, perCredit: 2.50, popular: false },
    { credits: 60, price: 139.99, oldPrice: 210, perCredit: 2.33, popular: false },
    { credits: 120, price: 279.99, oldPrice: 420, perCredit: 2.33, popular: true },
    { credits: 240, price: 499.99, oldPrice: 840, perCredit: 2.08, popular: false },
  ];

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Reseller Panel',
      desc: 'Vollständiges Kontrollpanel zur Verwaltung deiner Kunden, Erstellung von Konten und Überwachung deines Geschäfts in Echtzeit.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m10-4V2m0 2a2 2 0 100 4m0-4a2 2 0 110 4M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Credits laufen nie ab',
      desc: 'Deine Credits und dein Panel haben kein Ablaufdatum. Baue dein Geschäft in deinem eigenen Tempo auf, ohne Stress.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Anti-Freeze Technologie',
      desc: 'Fortschrittliche Technologie, die Pufferung und Einfrieren eliminiert. Liefere deinen Kunden ein einwandfreies Erlebnis.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '99,9% Serververfügbarkeit',
      desc: 'Premium-Server mit nahezu perfekter Betriebszeit. Deine Kunden können sich auf einen stabilen und zuverlässigen Dienst verlassen.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Bouquet-Verwaltung',
      desc: 'Erstelle individuelle Senderpakete für deine Kunden. Volle Kontrolle über enthaltene Sender und Inhalte.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Unbegrenzte Testkonten',
      desc: 'Erstelle unbegrenzt Testkonten für potenzielle Kunden. Lass sie testen, bevor sie kaufen.',
    },
  ];

  const stats = [
    { value: '65.000+', label: 'Sender mit EPG' },
    { value: '175.000+', label: 'Filme & Serien' },
    { value: '99,9%', label: 'Serververfügbarkeit' },
    { value: '24/7', label: 'Technischer Support' },
  ];

  const faqItems = [
    {
      question: 'Was ist ein IPTV-Reseller?',
      answer: 'Als IPTV-Reseller kaufst du Credits in großen Mengen von uns und verkaufst dann IPTV-Abonnements an deine eigenen Kunden weiter. Du bekommst ein eigenes Kontrollpanel, über das du alles verwaltest und deine eigenen Preise festlegst.',
    },
    {
      question: 'Wie funktioniert das Credit-System?',
      answer: '1 Credit = 1 Monatsabonnement für einen Kunden. Wenn du zum Beispiel 120 Credits kaufst, kannst du 10 Kunden ein ganzes Jahresabonnement geben oder 120 Kunden ein Monatsabonnement. Du entscheidest selbst, wie du verteilst.',
    },
    {
      question: 'Laufen meine Credits ab?',
      answer: 'Nein! Deine Credits und dein Reseller-Panel laufen nie ab. Du kannst dein Geschäft in deinem eigenen Tempo aufbauen, ohne Zeitdruck.',
    },
    {
      question: 'Welchen Gewinn kann ich erwarten?',
      answer: 'Das hängt davon ab, wie du deine Pakete bepreist. Die meisten Reseller nehmen 9,99-19,99 €/Monat pro Kunde. Mit einem Credit-Preis von ca. 2,33 € pro Credit kannst du 7-17 € pro Kunde und Monat verdienen.',
    },
    {
      question: 'Bekomme ich technischen Support als Reseller?',
      answer: 'Ja, du bekommst priorisierten technischen Support via WhatsApp rund um die Uhr. Wir helfen dir bei technischen Problemen, damit du dich auf das Wachstum deines Geschäfts konzentrieren kannst.',
    },
    {
      question: 'Kann ich Testkonten für potenzielle Kunden erstellen?',
      answer: 'Auf jeden Fall! Du kannst unbegrenzt Testkonten direkt über dein Reseller-Panel erstellen. Das ist der beste Weg, neue Kunden zu überzeugen.',
    },
  ];

  const steps = [
    { num: '01', title: 'Paket wählen', desc: 'Wähle das Credit-Paket, das zu deinen Ambitionen passt.' },
    { num: '02', title: 'Panel erhalten', desc: 'Du bekommst Zugang zu deinem Reseller-Panel innerhalb von Minuten.' },
    { num: '03', title: 'Konten erstellen', desc: 'Nutze deine Credits, um Kundenkonten zu erstellen.' },
    { num: '04', title: 'Geld verdienen', desc: 'Setze deine eigenen Preise und baue dein Geschäft auf.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Starte dein eigenes IPTV-Geschäft</span>
              </div>

              <h1 className="text-5xl md:text-[80px] font-black leading-[0.95] mb-8 tracking-tighter">
                WERDE IPTV<br />
                <span className="gradient-text italic">RESELLER.</span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Starte dein eigenes IPTV-Geschäft noch heute. Kaufe Credits, setze deine eigenen Preise und baue ein profitables Business mit Deutschlands bestem IPTV-Dienst auf.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
                <a href="#reseller-preise" className="px-10 py-5 bg-white text-black font-black rounded-2xl text-lg hover:bg-slate-200 transition-all shadow-2xl shadow-white/5 active:scale-95">
                  Reseller-Pakete ansehen
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-red-600/10 backdrop-blur-md text-white font-black rounded-2xl text-lg border border-red-600/40 hover:bg-red-600/20 transition-all flex items-center justify-center gap-3 active:scale-95">
                  <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Kontaktiere uns
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                  <span className="text-red-400">01</span> Eigenes Panel
                </div>
                <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                  <span className="text-red-400">02</span> Hoher Gewinn
                </div>
                <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                  <span className="text-red-400">03</span> 24/7 Support
                </div>
              </div>
            </div>

            {/* Right side card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-20 -right-10 w-40 h-40 bg-red-600/30 blur-[60px] rounded-full animate-bounce"></div>
                <div className="glass-card p-10 rounded-[48px] border-white/10 shadow-2xl shadow-red-500/10 relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  </div>

                  <div className="mb-8">
                    <span className="text-red-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">RESELLER PROGRAMM</span>
                    <h2 className="text-4xl font-black mb-4 tracking-tight">Baue dein Business</h2>
                    <p className="text-slate-400 font-medium">Alles, was du brauchst, um ein erfolgreiches IPTV-Geschäft zu starten und zu betreiben.</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-2xl">1</span>
                      <span className="text-xl font-black text-white">=</span>
                      <span className="text-sm font-bold text-slate-200">1 Credit = 1 Monatsabonnement</span>
                    </div>
                    {[
                      { icon: '📡', text: '65.000+ Sender mit EPG' },
                      { icon: '🎬', text: '175.000+ Filme & Serien (VOD)' },
                      { icon: '💰', text: 'Setze deine eigenen Preise' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm font-bold text-slate-200">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#reseller-preise" className="flex items-center justify-center gap-3 w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-slate-200 transition-transform active:scale-95 group shadow-xl">
                    Jetzt starten
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="bg-red-600 py-6 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-red-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="bg-slate-950 py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest uppercase mb-6 inline-block">SO FUNKTIONIERT ES</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Vier einfache Schritte zu <span className="italic gradient-text">deinem IPTV-Business</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="glass-card p-8 rounded-[32px] border-white/10 text-center group hover:border-red-500/50 transition-all">
                <div className="text-5xl font-black text-red-500/20 mb-4 group-hover:text-red-500/40 transition-colors">{step.num}</div>
                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-950 py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest uppercase mb-6 inline-block">FUNKTIONEN</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Alles was du brauchst um <span className="italic gradient-text">erfolgreich zu sein</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="glass-card p-8 rounded-[32px] border-white/10 group hover:border-red-500/50 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 text-red-400 group-hover:text-red-300 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-black mb-3">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="reseller-preise" className="bg-[#020617] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest uppercase mb-6 inline-block">RESELLER-PAKETE</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Wähle dein <span className="italic gradient-text">Credit-Paket</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">1 Credit = 1 Monatsabonnement für einen Kunden. Credits und Panel laufen nie ab.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {resellerPlans.map((plan, i) => (
              <div key={i} className={`glass-card rounded-[32px] overflow-hidden transition-all hover:scale-[1.02] ${plan.popular ? 'border-red-500/50 ring-1 ring-red-500/20 relative' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="bg-red-600 text-center py-2 text-xs font-black uppercase tracking-[0.2em]">
                    Am beliebtesten
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-black mb-1">{plan.credits}</div>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Credits</div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-lg text-slate-500 line-through font-bold">€{plan.oldPrice}</div>
                    <div className="text-3xl font-black text-white">€{plan.price}</div>
                    <div className="text-sm text-red-400 font-bold mt-1">€{plan.perCredit.toFixed(2)} / Credit</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      'Reseller Panel',
                      '65.000+ Sender',
                      '175.000+ VOD',
                      'Anti-Freeze Technologie',
                      '99,9% Betriebszeit',
                      'Unbegrenzte Testkonten',
                      'Bouquet-Verwaltung',
                      'Credits laufen nie ab',
                    ].map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-3 text-sm">
                        <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hallo, ich möchte das Reseller-Paket mit ${plan.credits} Credits für €${plan.price} kaufen. Bitte helft mir beim Einstieg!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-2xl font-black text-center transition-all active:scale-95 ${
                      plan.popular
                        ? 'bg-red-600 text-white hover:bg-red-500 shadow-xl shadow-red-600/20'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    Jetzt kaufen
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-950 py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[350px,1fr] gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black sticky top-32 leading-tight">
                Reseller<br /><span className="text-blue-200">FAQ</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className={`text-xl font-bold transition-colors ${openFaq === idx ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                    <p className="text-gray-400 leading-relaxed text-lg">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card p-12 md:p-16 rounded-[48px] border-white/10 shadow-2xl shadow-red-500/5 text-center max-w-4xl mx-auto">
            <span className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest uppercase mb-8 inline-block">BEREIT ZU STARTEN?</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Starte dein IPTV-Business <span className="italic gradient-text">noch heute</span></h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Kontaktiere uns über WhatsApp, um sofort loszulegen. Wir helfen dir bei allem — vom Start bis zum Erfolg.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-red-600 text-white font-black rounded-2xl text-lg hover:bg-red-500 transition-all shadow-xl shadow-red-600/20 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Reseller werden via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResellerPage;
