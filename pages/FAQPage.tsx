
import React, { useState } from 'react';

interface FAQDetailItem {
  question: string;
  answer: string[];
}

const FAQ_DETAILED: FAQDetailItem[] = [
  {
    question: "Welche Geräte werden unterstützt?",
    answer: [
      "Unser Dienst ist mit praktisch allen modernen Geräten auf dem Markt kompatibel. Hier ist eine vollständige Liste:",
      "Smart TV — Samsung (Tizen OS), LG (WebOS), Sony (Android TV), Philips, Hisense und TCL. Installiere einfach unsere empfohlene App direkt aus dem App-Store deines Fernsehers.",
      "Android-Geräte — Android TV-Boxen (Nvidia Shield, Xiaomi Mi Box, Formuler), Android-Handys und Tablets. Wir empfehlen die App TiviMate oder IPTV Smarters für das beste Erlebnis.",
      "Apple-Geräte — Apple TV (4K und HD), iPhone und iPad. Verwende die App IPTV Smarters oder GSE Smart IPTV aus dem App Store.",
      "PC & Mac — Schau direkt über VLC Media Player, Kodi oder unser Webportal. Funktioniert unter Windows, macOS und Linux.",
      "MAG-Boxen — Alle MAG-Modelle werden unterstützt (MAG 250, 254, 322, 324, 420, 520 und neuer). Einfache Installation über das STB-Portal.",
      "Enigma2/Dreambox — Vollständig unterstützt für fortgeschrittene Nutzer, die Satellitenempfänger bevorzugen.",
      "Wenn du unsicher bist, welches Gerät oder welche App am besten zu dir passt — kontaktiere unseren Support und wir helfen dir Schritt für Schritt."
    ]
  },
  {
    question: "Wie schnell muss mein Internet sein?",
    answer: [
      "Die Geschwindigkeit deiner Internetverbindung ist entscheidend für ein stabiles und pufferfreies Streaming-Erlebnis. Hier sind unsere Empfehlungen:",
      "SD-Qualität (480p) — Mindestens 5 Mbit/s. Ausreichend für grundlegendes Schauen auf kleineren Bildschirmen wie Handys und Tablets.",
      "HD-Qualität (720p/1080p) — Mindestens 15-20 Mbit/s. Das ist die Einstellung, die die meisten unserer Kunden nutzen, und sie bietet ein scharfes und klares Bild auf den meisten Fernsehern.",
      "4K Ultra HD — Mindestens 50 Mbit/s. Empfohlen für Großbildfernseher (55 Zoll und größer) für die bestmögliche Bildqualität, besonders bei Sportevents.",
      "Wir empfehlen immer eine kabelgebundene Verbindung (Ethernet) gegenüber WLAN, da diese ein stabileres Signal liefert und das Puffer-Risiko verringert.",
      "Wenn du WLAN nutzt, stelle sicher, dass dein Router in der Nähe deines Gerätes steht und du das 5-GHz-Band anstelle des 2,4-GHz-Bands nutzt.",
      "Bedenke: Wenn mehrere Personen im Haushalt gleichzeitig streamen, musst du den Gesamtbedarf addieren. Zum Beispiel: Wenn zwei Personen in HD und eine in 4K schauen, brauchst du mindestens 90 Mbit/s insgesamt."
    ]
  },
  {
    question: "Sind die deutschen Sender enthalten?",
    answer: [
      "Auf jeden Fall! Wir haben eines der umfangreichsten Angebote an deutschen Sendern auf dem Markt. Hier ein Überblick:",
      "ARD & ZDF — Das Erste, ZDF, alle dritten Programme (WDR, NDR, BR, SWR, HR, MDR, RBB), Phoenix, arte, ZDFneo, ONE und alle regionalen Sender.",
      "RTL-Gruppe — RTL, VOX, NITRO, RTL II, Super RTL, n-tv. Alle in jedem Paket enthalten.",
      "ProSiebenSat.1 — ProSieben, Sat.1, Kabel 1, Sixx, ProSieben MAXX, SAT.1 Gold, WELT und N24 Doku.",
      "Sky Deutschland — Alle Sky-Sender inklusive Sky Sport, Sky Bundesliga, Sky Cinema und Sky Krimi. Perfekt für Bundesliga, Champions League und Filme.",
      "DAZN — Alle DAZN-Kanäle für Bundesliga, Champions League, NFL, NBA und mehr.",
      "Sport — Zusätzlich haben wir Sport1, Eurosport 1 & 2, beIN Sports, ESPN und BT Sport für internationalen Sport.",
      "Kinder — Disney Channel, Nickelodeon, Cartoon Network, KiKA und Super RTL.",
      "Nachrichten & Dokus — n-tv, WELT, CNN, BBC World News, National Geographic und Discovery Channel.",
      "Insgesamt bieten wir über 20.000 Sender aus aller Welt, mit Fokus auf Deutschland, DACH-Region, Europa und internationale Inhalte."
    ]
  },
  {
    question: "Wie schnell wird mein Konto aktiviert?",
    answer: [
      "Wir wissen, dass du schnell starten möchtest — und genau das liefern wir.",
      "Standard-Aktivierung — Dein Konto wird innerhalb von 5 bis 15 Minuten nach Zahlungsbestätigung aktiviert. Du erhältst deine Zugangsdaten per E-Mail oder WhatsApp, je nach Wunsch.",
      "Was du erhältst — Einen Benutzernamen und ein Passwort sowie einen M3U-Link oder Xtream-Codes-Zugangsdaten, je nachdem welche App du nutzen möchtest. Wir senden auch eine einfache Schritt-für-Schritt-Anleitung zur Installation.",
      "Installationshilfe — Wenn du Hilfe bei der Installation auf deinem Gerät brauchst, kann unser Support dich per WhatsApp oder Fernsteuerung anleiten. Wir stellen sicher, dass alles funktioniert, bevor wir dich allein lassen.",
      "Testkonten — Wir bieten kostenlose 24-Stunden-Testkonten an, damit du den Service ausprobieren kannst, bevor du dich entscheidest. Kontaktiere unseren Support für einen Testzugang.",
      "Unser Support ist 7 Tage die Woche erreichbar und antwortet normalerweise innerhalb weniger Minuten."
    ]
  },
  {
    question: "Habt ihr 4K-Qualität?",
    answer: [
      "Ja! Wir bieten echte 4K-Ultra-HD-Qualität auf einer großen Anzahl von Sendern und Inhalten.",
      "Sport in 4K — Große Events wie Champions League, Bundesliga, Formel 1, UFC und Olympische Spiele werden in 4K gesendet, wenn vom Sender verfügbar. Erlebe jedes Detail, als wärst du im Stadion.",
      "Filme & Serien in 4K — Unsere Bibliothek mit Filmen und Serien (VOD) enthält tausende Titel in 4K-HDR-Qualität. Neue Filme werden laufend hinzugefügt.",
      "Live-Sender in 4K — Wir haben dedizierte 4K-Sender von unter anderem Sky, beIN und anderen Premium-Anbietern.",
      "FHD als Standard — Auch Sender, die nicht in 4K senden, werden standardmäßig in Full HD (1080p) geliefert, sodass du immer ein scharfes Bild bekommst.",
      "Um in 4K zu schauen, benötigst du einen Fernseher oder Bildschirm, der 4K-Auflösung unterstützt, ein Gerät, das 4K dekodieren kann (z.B. Nvidia Shield, Apple TV 4K oder einen modernen Smart TV) sowie eine Internetverbindung von mindestens 50 Mbit/s.",
      "Die Bildqualität ist eine der Eigenschaften, die unsere Kunden am meisten schätzen. Wir investieren ständig in bessere Server und Infrastruktur, um ein stabiles und hochwertiges Erlebnis zu garantieren."
    ]
  }
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-500/5 blur-[120px] rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-red-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block">SUPPORT</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Häufig gestellte <span className="text-red-400">Fragen</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Hier findest du ausführliche Antworten auf die häufigsten Fragen zu unserem Service. Findest du nicht die passende Antwort? Kontaktiere unseren Support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DETAILED.map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-red-500/20 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-bold transition-colors ${openIndex === idx ? 'text-red-400' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openIndex === idx ? 'bg-red-600 rotate-180' : 'bg-white/5 group-hover:bg-white/10'}`}>
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
        <div className="mt-20 max-w-4xl mx-auto p-12 rounded-[40px] bg-red-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-4">Hast du weitere Fragen?</h3>
              <p className="text-red-100 font-medium max-w-xl">
                Unser Support antwortet innerhalb von Minuten und ist 7 Tage die Woche erreichbar. Wir helfen dir gerne bei allem — von der Installation bis zur Fehlerbehebung.
              </p>
            </div>
            <a href="https://wa.me/447449708976?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20HAKUNA%20TV." target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-red-600 font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 hover:scale-105 transition-all shadow-xl shadow-black/10 whitespace-nowrap">
              Support kontaktieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
