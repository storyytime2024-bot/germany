
import React, { useState, useRef, useEffect } from 'react';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'sv', label: 'Svenska', flag: '\u{1F1F8}\u{1F1EA}' },
  { code: 'en', label: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
  { code: 'no', label: 'Norsk', flag: '\u{1F1F3}\u{1F1F4}' },
  { code: 'fi', label: 'Suomi', flag: '\u{1F1EB}\u{1F1EE}' },
  { code: 'nl', label: 'Nederlands', flag: '\u{1F1F3}\u{1F1F1}' },
  { code: 'de', label: 'Deutsch', flag: '\u{1F1E9}\u{1F1EA}' },
  { code: 'da', label: 'Dansk', flag: '\u{1F1E9}\u{1F1F0}' },
  { code: 'fr', label: 'Fran\u00e7ais', flag: '\u{1F1EB}\u{1F1F7}' },
  { code: 'es', label: 'Espa\u00f1ol', flag: '\u{1F1EA}\u{1F1F8}' },
  { code: 'it', label: 'Italiano', flag: '\u{1F1EE}\u{1F1F9}' },
  { code: 'pl', label: 'Polski', flag: '\u{1F1F5}\u{1F1F1}' },
  { code: 'pt', label: 'Portugu\u00eas', flag: '\u{1F1F5}\u{1F1F9}' },
];

function triggerGoogleTranslate(langCode: string) {
  if (langCode === 'sv') {
    // Reset to original language
    const iframe = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
    if (iframe) {
      const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
      const restoreBtn = innerDoc?.querySelector('.goog-te-banner-frame-close') as HTMLElement;
      if (restoreBtn) restoreBtn.click();
    }
    // Fallback: remove the cookie and reload
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
    window.location.reload();
    return;
  }

  // Set the Google Translate cookie
  document.cookie = `googtrans=/sv/${langCode}; path=/;`;
  document.cookie = `googtrans=/sv/${langCode}; path=/; domain=.${window.location.hostname}`;

  // Try using the Google Translate combo box
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  } else {
    // If the widget hasn't loaded yet, reload
    window.location.reload();
  }
}

function getCurrentLanguage(): string {
  const match = document.cookie.match(/googtrans=\/sv\/(\w+)/);
  return match ? match[1] : 'sv';
}

interface LanguageSwitcherProps {
  mobile?: boolean;
  floating?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ mobile = false, floating = false }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCode = getCurrentLanguage();
    const lang = languages.find(l => l.code === currentCode);
    if (lang) setSelected(lang);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(lang: Language) {
    setSelected(lang);
    setOpen(false);
    triggerGoogleTranslate(lang.code);
  }

  if (floating) {
    return (
      <div ref={ref} className="fixed bottom-6 right-6 z-[999]">
        {/* Main floating button */}
        <button
          onClick={() => setOpen(!open)}
          className={`group flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 ${open ? 'scale-105' : ''}`}
          title="Change language"
        >
          {/* Globe / Translate icon */}
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {/* Current flag */}
          <span className="text-2xl">{selected.flag}</span>
          {/* Label */}
          <span className="text-white font-bold text-sm hidden sm:inline">{selected.label}</span>
          {/* Chevron */}
          <svg className={`w-4 h-4 text-white/70 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute bottom-full right-0 mb-3 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden max-h-[420px] overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-sm font-bold text-white/70 uppercase tracking-wider">Translate</span>
            </div>
            {/* Language list */}
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`flex items-center gap-4 w-full px-5 py-3.5 text-left transition-all duration-200 ${
                  lang.code === selected.code
                    ? 'bg-indigo-600/20 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white hover:pl-6'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-semibold text-base">{lang.label}</span>
                {lang.code === selected.code && (
                  <svg className="w-5 h-5 text-indigo-400 ml-auto" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (mobile) {
    return (
      <div ref={ref} className="relative w-full">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-lg font-bold text-white"
        >
          <span>{selected.flag} {selected.label}</span>
          <svg className={`w-5 h-5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="mt-2 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden max-h-60 overflow-y-auto custom-scrollbar">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`flex items-center gap-3 w-full px-5 py-3 text-left text-base font-semibold transition-colors ${
                  lang.code === selected.code ? 'bg-indigo-600/20 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-semibold text-slate-300 hover:text-white"
      >
        <span className="text-base">{selected.flag}</span>
        <span className="hidden xl:inline">{selected.label}</span>
        <svg className={`w-3.5 h-3.5 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 max-h-80 overflow-y-auto custom-scrollbar">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                lang.code === selected.code ? 'bg-indigo-600/20 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
