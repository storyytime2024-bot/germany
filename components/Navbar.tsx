
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  scrolled: boolean;
}

interface NavLink {
  name: string;
  href?: string;
  to?: string;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Startseite', to: '/' },
    { name: 'Sender', to: '/sender' },
    { name: 'Preise', to: '/preise' },
    { name: 'FAQ', to: '/faq' },
    { name: 'Reseller', to: '/reseller' },
    { name: 'Blog', to: '/blog' },
  ];

  const phoneNumber = "447449708976";
  const supportMessage = encodeURIComponent("Hallo, ich habe eine Frage zu HAKUNA TV.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${supportMessage}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-[#020617] ${scrolled ? 'border-b border-white/5 py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center shadow-xl shadow-red-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
              <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl tracking-tighter uppercase flex items-center">
              <span className="text-white">HAKUNA</span>
              <span className="text-red-600">TV</span>
            </span>
            <span className="text-[8px] font-black tracking-[0.3em] text-slate-500 uppercase mt-0.5">Premium Streaming</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            link.to ? (
              <Link key={link.name} to={link.to} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all">
                {link.name}
              </a>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
           <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-300 hover:text-white transition-colors mr-4">
             Support
           </a>
          <LanguageSwitcher />
          <a href="/#preise" className="px-7 py-3 bg-white text-black text-xs font-black rounded-xl hover:bg-slate-200 transition-all uppercase tracking-widest active:scale-95 shadow-lg shadow-white/5">
            Jetzt Starten
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[70px] bg-slate-950/98 backdrop-blur-3xl transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-10 gap-8 h-full">
          {navLinks.map((link, i) => (
            link.to ? (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-black border-b border-white/5 pb-4 tracking-tighter"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-black border-b border-white/5 pb-4 tracking-tighter"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            )
          ))}
          <div className="mt-auto space-y-4 pb-20">
            <LanguageSwitcher mobile />
            <a href="/#preise" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-red-600 text-center py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-600/20">
              Jetzt Paket wählen
            </a>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-white/5 border border-white/10 text-center py-5 rounded-2xl font-black text-lg">
              Support kontaktieren
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
