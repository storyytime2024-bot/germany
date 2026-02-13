
import React from 'react';
import Hero from '../components/Hero';
import ScrollingBanner from '../components/ScrollingBanner';
import SportsSection from '../components/SportsSection';
import MediaScroller from '../components/MediaScroller';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import PremiumChannels from '../components/PremiumChannels';

const HomePage: React.FC = () => {
  const phoneNumber = "447449708976";
  const supportMessage = encodeURIComponent("Hej, jag behöver hjälp med MYIPTVNORDIC.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${supportMessage}`;

  return (
    <>
      <Hero />

      <div className="bg-indigo-600 py-3 overflow-hidden border-y border-white/5">
        <ScrollingBanner texts={["CHAMPIONS LEAGUE", "PREMIER LEAGUE", "ALLSVENSKAN", "FORMEL 1", "NHL", "SHL", "UFC", "SERIE A", "LA LIGA"]} />
      </div>

      <section className="bg-slate-950 pb-20">
        <SportsSection />
      </section>

      <section className="bg-slate-950 py-20 border-t border-white/5">
        <PremiumChannels />
      </section>

      <section id="bibliotek" className="bg-slate-950 pb-20 overflow-hidden">
        <MediaScroller
          title="Toppfilmer i Sverige"
          tag="NU TRENDING"
          items={[
            { id: 1, title: 'The Substance', img: 'https://image.tmdb.org/t/p/w300/lqoMzCcZYEFK729d6qzt349fB4o.jpg' },
            { id: 2, title: 'Deadpool & Wolverine', img: 'https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' },
            { id: 3, title: 'Gladiator II', img: 'https://image.tmdb.org/t/p/w300/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg' },
            { id: 4, title: 'Wicked', img: 'https://image.tmdb.org/t/p/w300/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg' },
            { id: 5, title: 'Vaiana 2', img: 'https://image.tmdb.org/t/p/w300/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg' },
            { id: 6, title: 'Mufasa', img: 'https://image.tmdb.org/t/p/w300/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg' },
            { id: 7, title: 'Inside Out 2', img: 'https://image.tmdb.org/t/p/w300/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg' },
            { id: 8, title: 'Oppenheimer', img: 'https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
            { id: 9, title: 'Dune: Part Two', img: 'https://image.tmdb.org/t/p/w300/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
            { id: 10, title: 'Joker: Folie à Deux', img: 'https://image.tmdb.org/t/p/w300/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg' },
            { id: 11, title: 'Beetlejuice Beetlejuice', img: 'https://image.tmdb.org/t/p/w300/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg' },
            { id: 12, title: 'Venom: The Last Dance', img: 'https://image.tmdb.org/t/p/w300/aosm8NMQ3UyoBVpSxyimorCQykC.jpg' }
          ]}
        />
      </section>

      <section id="priser" className="bg-[#020617] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]"></div>
        <Pricing />
      </section>

      <section id="fordelar" className="bg-slate-950 py-24 border-t border-white/5">
        <Features />
      </section>

      <section className="bg-slate-950 py-24 border-t border-white/5">
        <Testimonials />
      </section>

      <section id="faq" className="bg-slate-950 py-24 border-t border-white/5">
        <FAQ />
      </section>

      <section className="bg-black py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Redo att uppgradera din TV-upplevelse?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">Sluta betala för dyra kabelabonnemang. Få tillgång till världens största bibliotek av kanaler, filmer och serier till en bråkdel av kostnaden.</p>
            <div className="flex flex-col gap-3">
              <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest">Support Region</span>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xl font-bold flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <span className="flex gap-1">
                    <span className="text-lg">🇸🇪</span>
                    <span className="text-lg">🇳🇴</span>
                    <span className="text-lg">🇩🇰</span>
                    <span className="text-lg">🇫🇮</span>
                    <span className="text-lg">🇪🇺</span>
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-lg">🇬🇧</span>
                  </span>
                  <span className="text-slate-200">Sverige, Norden, Europa, USA & UK</span>
                </span>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[32px] border-white/10 shadow-2xl shadow-indigo-500/5">
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              Vårt team sitter redo för att hjälpa dig igång. Vi erbjuder personlig support på svenska för att säkerställa att din installation blir perfekt.
              <br /><br />
              Vi stödjer alla appar och enheter på marknaden världen över.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl text-center hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 text-lg">
              Kontakta Supporten på WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
