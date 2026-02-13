
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase">
                <span className="text-white">MYIPTV</span>
                <span className="text-indigo-500">NORDIC</span>
              </span>
              <span className="text-[7px] font-black tracking-[0.3em] text-slate-500 uppercase mt-0.5">Nordic Excellence</span>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-10">
            <Link to="/kanaler" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors">Kanaler</Link>
            <Link to="/priser" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors">Priser</Link>
            <a href="/#bibliotek" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors">VOD</a>
            <Link to="/faq" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors">FAQ</Link>
            <Link to="/reseller" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors">Reseller</Link>
            <Link to="/blogg" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-colors">Blogg</Link>
          </div>

          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} MYIPTVNORDIC.COM. BÄSTA IPTV I SVERIGE, NORGE, FINLAND, DANMARK & NEDERLAND.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
