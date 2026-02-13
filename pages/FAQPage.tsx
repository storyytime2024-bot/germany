
import React, { useState } from 'react';

interface FAQDetailItem {
  question: string;
  answer: string[];
}

const FAQ_DETAILED: FAQDetailItem[] = [
  {
    question: "Vilka enheter stöds?",
    answer: [
      "Vår tjänst är kompatibel med i princip alla moderna enheter på marknaden. Här är en komplett lista:",
      "Smart TV — Samsung (Tizen OS), LG (WebOS), Sony (Android TV), Philips, Hisense och TCL. Du installerar helt enkelt vår rekommenderade app direkt från din TV:s appbutik.",
      "Android-enheter — Android TV-boxar (Nvidia Shield, Xiaomi Mi Box, Formuler), Android-telefoner och surfplattor. Vi rekommenderar appen TiviMate eller IPTV Smarters för bästa upplevelse.",
      "Apple-enheter — Apple TV (4K och HD), iPhone och iPad. Använd appen IPTV Smarters eller GSE Smart IPTV från App Store.",
      "PC & Mac — Titta direkt via VLC Media Player, Kodi eller vår webbportal. Fungerar på Windows, macOS och Linux.",
      "MAG-boxar — Alla MAG-modeller stöds (MAG 250, 254, 322, 324, 420, 520 och nyare). Enkel installation via STB-portalen.",
      "Enigma2/Dreambox — Stöds fullt ut för avancerade användare som föredrar satellitmottagare.",
      "Om du är osäker på vilken enhet eller app som passar bäst för dig — kontakta vår support så hjälper vi dig steg för steg."
    ]
  },
  {
    question: "Hur snabb internetanslutning behöver jag?",
    answer: [
      "Hastigheten på din internetanslutning är avgörande för en stabil och bufferfri streamingupplevelse. Här är våra rekommendationer:",
      "SD-kvalitet (480p) — Minst 5 Mbps. Tillräckligt för grundläggande tittande på mindre skärmar som telefoner och surfplattor.",
      "HD-kvalitet (720p/1080p) — Minst 15-20 Mbps. Detta är vad de flesta av våra kunder använder och det ger en skarp och tydlig bild på de flesta TV-apparater.",
      "4K Ultra HD — Minst 50 Mbps. Rekommenderas för storskärms-TV (55 tum och uppåt) för att få den bästa möjliga bildkvaliteten, särskilt vid sportevenemang.",
      "Vi rekommenderar alltid en trådbunden anslutning (Ethernet) framför Wi-Fi när det är möjligt, eftersom det ger en mer stabil signal och minskar risken för buffring.",
      "Om du använder Wi-Fi, se till att din router är placerad nära din enhet och att du använder 5 GHz-bandet istället för 2.4 GHz för bättre prestanda.",
      "Tänk på att om flera personer i hushållet streamar samtidigt behöver du räkna ihop det totala behovet. Till exempel: om två personer tittar i HD och en i 4K behöver du minst 90 Mbps totalt."
    ]
  },
  {
    question: "Ingår de svenska kanalerna?",
    answer: [
      "Absolut! Vi har ett av marknadens mest kompletta utbud av svenska kanaler. Här är en översikt av vad som ingår:",
      "SVT — SVT1, SVT2, SVT24, SVT Barn och alla SVT:s regionala kanaler.",
      "TV4-gruppen — TV4, TV4 Fakta, TV4 Film, Sjuan och TV12. Alla ingår i samtliga paket.",
      "Viaplay & V Sport — Alla V Sport-kanaler inklusive V Sport Premium, V Sport Extra och V Sport Hockey. Perfekt för dig som vill se Premier League, SHL, Champions League och mer.",
      "C More — C More Stars, C More Hits, C More Series, C More First och alla C More Sport-kanaler. Här hittar du Allsvenskan, Serie A och La Liga.",
      "Discovery — Kanal 5, Kanal 9, Kanal 11, Discovery Channel, TLC, Animal Planet och Eurosport 1 & 2.",
      "Sport — Utöver ovanstående har vi även beIN Sports, ESPN, DAZN, Sky Sports och BT Sport för internationell sport.",
      "Barn — Disney Channel, Cartoon Network, Nickelodeon, JimJam och Babykanalen.",
      "Nyheter & Dokumentärer — CNN, BBC World News, Al Jazeera, National Geographic och History Channel.",
      "Totalt erbjuder vi över 20 000 kanaler från hela världen, med fokus på Norden, Europa, Mellanöstern och Nordamerika."
    ]
  },
  {
    question: "Hur snabbt aktiveras mitt konto?",
    answer: [
      "Vi vet att du vill komma igång snabbt — och det är precis vad vi levererar.",
      "Standard aktivering — Ditt konto aktiveras inom 5 till 15 minuter efter att betalningen har bekräftats. Du får dina inloggningsuppgifter skickade via e-post eller WhatsApp, beroende på vad du föredrar.",
      "Vad du får — Ett användarnamn och lösenord, samt en M3U-länk eller Xtream Codes-uppgifter beroende på vilken app du vill använda. Vi skickar även en enkel steg-för-steg-guide för installation.",
      "Installationshjälp — Om du behöver hjälp att installera på din enhet kan vår support guida dig via WhatsApp eller fjärrstyrd support. Vi ser till att allt fungerar innan vi lämnar dig.",
      "Testkonton — Vi erbjuder gratis testkonton i 24 timmar så att du kan prova tjänsten innan du bestämmer dig. Kontakta vår support för att få tillgång till en testperiod.",
      "Vår support är tillgänglig 7 dagar i veckan och svarar normalt inom några minuter."
    ]
  },
  {
    question: "Har ni 4K-kvalitet?",
    answer: [
      "Ja! Vi erbjuder äkta 4K Ultra HD-kvalitet på ett stort antal kanaler och innehåll.",
      "Sport i 4K — Stora evenemang som Champions League, Premier League, Formel 1, UFC och OS sänds i 4K när det är tillgängligt från sändaren. Upplev varje detalj som om du satt på arenan.",
      "Film & Serier i 4K — Vårt bibliotek med filmer och serier (VOD) innehåller tusentals titlar i 4K HDR-kvalitet. Nya filmer läggs till löpande.",
      "Live-kanaler i 4K — Vi har dedikerade 4K-kanaler från bland annat Sky, beIN och andra premiumleverantörer.",
      "FHD som standard — Även kanaler som inte sänds i 4K levereras i Full HD (1080p) som standard, så du får alltid en skarp bild.",
      "För att kunna titta i 4K behöver du en TV eller skärm som stödjer 4K-upplösning, en enhet som kan avkoda 4K (t.ex. Nvidia Shield, Apple TV 4K eller en modern Smart TV) samt en internetanslutning på minst 50 Mbps.",
      "Bildkvaliteten är en av de saker våra kunder uppskattar allra mest. Vi investerar ständigt i bättre servrar och infrastruktur för att garantera en stabil och högkvalitativ upplevelse."
    ]
  }
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 blur-[120px] rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block">SUPPORT</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Vanligt ställda <span className="text-indigo-400">frågor</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Här hittar du detaljerade svar på de vanligaste frågorna om vår tjänst. Hittar du inte svaret du söker? Kontakta vår support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DETAILED.map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/20 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-bold transition-colors ${openIndex === idx ? 'text-indigo-400' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openIndex === idx ? 'bg-indigo-600 rotate-180' : 'bg-white/5 group-hover:bg-white/10'}`}>
                  <svg
                    className="w-5 h-5 transition-transform duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-[2000px] pb-8' : 'max-h-0'}`}>
                <div className="px-8 space-y-4">
                  {item.answer.map((paragraph, pIdx) => (
                    <p key={pIdx} className={`leading-relaxed ${pIdx === 0 ? 'text-slate-300 text-lg font-medium' : 'text-slate-400'}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 max-w-4xl mx-auto p-12 rounded-[40px] bg-indigo-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-4">Har du fler frågor?</h3>
              <p className="text-indigo-100 font-medium max-w-xl">
                Vår support svarar inom minuter och finns tillgänglig 7 dagar i veckan. Vi hjälper dig gärna med allt från installation till felsökning.
              </p>
            </div>
            <a href="https://wa.me/447449708976?text=Hej%2C%20jag%20har%20en%20fr%C3%A5ga%20om%20MYIPTVNORDIC." target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-indigo-600 font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 hover:scale-105 transition-all shadow-xl shadow-black/10 whitespace-nowrap">
              Kontakta Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
