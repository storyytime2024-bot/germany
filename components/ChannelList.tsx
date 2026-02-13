
import React, { useState, useMemo, useCallback } from 'react';
import { CHANNEL_CATEGORIES, ChannelCategory } from '../constants';

const REGION_LABELS: Record<string, { label: string; color: string }> = {
  nordic: { label: 'Norden', color: 'bg-blue-600' },
  featured: { label: 'Populärt', color: 'bg-indigo-600' },
  europe: { label: 'Europa', color: 'bg-emerald-600' },
  americas: { label: 'Amerika', color: 'bg-amber-600' },
  'middle-east': { label: 'Mellanöstern', color: 'bg-rose-600' },
  asia: { label: 'Asien', color: 'bg-cyan-600' },
  africa: { label: 'Afrika', color: 'bg-orange-600' },
  oceania: { label: 'Oceanien', color: 'bg-teal-600' },
  caribbean: { label: 'Karibien', color: 'bg-purple-600' },
};

const REGION_ORDER = ['nordic', 'featured', 'europe', 'americas', 'middle-east', 'asia', 'africa', 'oceania', 'caribbean'];

const totalChannels = 66000;

const ChannelList: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const selectedCategory = useMemo(() =>
    CHANNEL_CATEGORIES.find(c => c.id === selectedCategoryId),
    [selectedCategoryId]
  );

  const filteredChannels = useMemo(() => {
    if (!selectedCategory) return [];
    if (!searchQuery) return selectedCategory.channels;
    const q = searchQuery.toLowerCase();
    return selectedCategory.channels.filter(channel =>
      channel.toLowerCase().includes(q)
    );
  }, [selectedCategory, searchQuery]);

  const categoriesByRegion = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const filtered = searchQuery
      ? CHANNEL_CATEGORIES.filter(cat =>
          cat.name.toLowerCase().includes(q) ||
          cat.channels.some(ch => ch.toLowerCase().includes(q))
        )
      : CHANNEL_CATEGORIES;

    const regionFiltered = activeRegion
      ? filtered.filter(cat => cat.region === activeRegion)
      : filtered;

    const grouped: Record<string, ChannelCategory[]> = {};
    for (const cat of regionFiltered) {
      if (!grouped[cat.region]) grouped[cat.region] = [];
      grouped[cat.region].push(cat);
    }
    return grouped;
  }, [searchQuery, activeRegion]);

  const handleBack = useCallback(() => {
    setSelectedCategoryId(null);
    setSearchQuery('');
  }, []);

  const handleSelectCategory = useCallback((id: string) => {
    setSelectedCategoryId(id);
    setSearchQuery('');
  }, []);

  return (
    <div id="kanallista" className="container mx-auto px-6 mt-20 scroll-mt-24">
      <div className="text-center mb-10">
        <span className="text-indigo-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block">PORTAL</span>
        <h2 className="text-4xl md:text-6xl font-black mb-6">TV Kanaler & Innehåll</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">
          Vi erbjuder marknadens bredaste utbud. Välj en kategori nedan för att se hela listan av tillgängliga kanaler.
        </p>
      </div>

      {/* Stats Banner */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-sm font-bold text-slate-300">{totalChannels.toLocaleString()}+ Kanaler</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
          <span className="text-sm font-bold text-slate-300">{CHANNEL_CATEGORIES.length} Kategorier</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
          <span className="text-sm font-bold text-slate-300">4K / FHD / HD</span>
        </div>
      </div>


      {!selectedCategoryId ? (
        <>
          {/* Region Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveRegion(null)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${!activeRegion ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'}`}
            >
              Alla
            </button>
            {REGION_ORDER.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(activeRegion === region ? null : region)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeRegion === region ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'}`}
              >
                {REGION_LABELS[region].label}
              </button>
            ))}
          </div>

          {/* Categories grouped by region */}
          {REGION_ORDER.map(region => {
            const cats = categoriesByRegion[region];
            if (!cats || cats.length === 0) return null;
            const regionInfo = REGION_LABELS[region];
            return (
              <div key={region} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-1.5 h-8 rounded-full ${regionInfo.color}`}></div>
                  <h3 className="text-2xl font-black text-white">{regionInfo.label}</h3>
                  <span className="text-xs font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                    {cats.reduce((s, c) => s + c.channels.length, 0)} kanaler
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {cats.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className="group relative text-left bg-white border border-slate-200 p-7 rounded-[28px] hover:bg-slate-50 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform">
                            {cat.name.split(' ')[0]}
                          </div>
                          <div className={`px-2.5 py-1 ${regionInfo.color}/20 rounded-full text-[9px] font-black uppercase tracking-widest`} style={{ color: { 'bg-blue-600': '#60a5fa', 'bg-indigo-600': '#818cf8', 'bg-emerald-600': '#6ee7b7', 'bg-amber-600': '#fcd34d', 'bg-rose-600': '#fda4af', 'bg-cyan-600': '#67e8f9', 'bg-orange-600': '#fdba74', 'bg-teal-600': '#5eead4', 'bg-purple-600': '#c4b5fd' }[regionInfo.color] || '#94a3b8' }}>
                            {regionInfo.label}
                          </div>
                        </div>

                        <h3 className="text-lg font-black text-slate-800 mb-1.5 group-hover:text-indigo-600 transition-colors leading-tight">
                          {cat.name.split(' ').slice(1).join(' ')}
                        </h3>

                        <div className="mt-auto pt-3 flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-500">
                            {cat.channels.length} Kanaler
                          </span>
                          <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                            <svg className="w-4 h-4 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        /* CHANNEL LIST VIEW */
        <div className="glass-card p-8 md:p-12 rounded-[40px] border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-6">
              <button
                onClick={handleBack}
                className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all active:scale-95 group"
              >
                <svg className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <span className="text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase block mb-1">VISAR KATEGORI</span>
                <h3 className="text-3xl font-black flex items-center gap-3">
                  {selectedCategory?.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-bold text-slate-400">{filteredChannels.length} Tillgängliga kanaler</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {filteredChannels.length > 0 ? (
              filteredChannels.map((channel, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-[10px] font-black text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                    4K
                  </div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors truncate">{channel}</span>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-slate-500 font-medium italic">
                  Inga kanaler hittades i denna kategori för "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-6 text-indigo-400 font-bold hover:underline"
                >
                  Visa alla kanaler
                </button>
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={handleBack}
              className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Tillbaka till kategorier
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 p-12 rounded-[40px] bg-indigo-600 relative overflow-hidden group">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-white mb-4">Hittar du inte det du söker?</h3>
            <p className="text-indigo-100 font-medium max-w-xl">
              Vi lägger ständigt till nya kanaler. Kontakta vår support om du har specifika önskemål om kanaler eller innehåll.
            </p>
          </div>
          <a href="/#priser" className="px-12 py-5 bg-white text-indigo-600 font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 hover:scale-105 transition-all shadow-xl shadow-black/10 whitespace-nowrap">
            Kom igång nu
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
