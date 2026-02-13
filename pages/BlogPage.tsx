
import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const CATEGORIES = ['Alla', 'Guider', 'Nyheter', 'Tips & Tricks', 'Sport', 'Teknik'];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Så installerar du IPTV på din Smart TV — Komplett guide 2026',
    excerpt: 'Steg-för-steg-instruktioner för att komma igång med IPTV på Samsung, LG, Sony och andra Smart TV-apparater. Enklare än du tror.',
    category: 'Guider',
    date: '12 Feb 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Bästa IPTV-apparna 2026 — Vår topplista',
    excerpt: 'Vi jämför TiviMate, IPTV Smarters, GSE Smart IPTV och fler. Vilken app passar dig bäst?',
    category: 'Tips & Tricks',
    date: '10 Feb 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
  },
  {
    id: 3,
    title: 'Champions League 2025/26 — Så ser du alla matcher live',
    excerpt: 'Komplett guide till hur du streamar varje CL-match i 4K-kvalitet. Missa aldrig ett mål.',
    category: 'Sport',
    date: '8 Feb 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
  },
  {
    id: 4,
    title: 'Varför buffrar min IPTV? 7 enkla lösningar',
    excerpt: 'Upplever du buffring? Här är de vanligaste orsakerna och hur du fixar dem på några minuter.',
    category: 'Teknik',
    date: '5 Feb 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
  {
    id: 5,
    title: 'IPTV vs traditionell TV — Vad är skillnaden?',
    excerpt: 'En djupgående jämförelse mellan IPTV och traditionell kabel-TV. Upptäck varför miljontals byter till IPTV.',
    category: 'Nyheter',
    date: '2 Feb 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&q=80',
  },
  {
    id: 6,
    title: 'Så optimerar du din router för bästa streaming',
    excerpt: 'Rätt routerinställningar kan göra enorm skillnad. Lär dig hur du får ut maximalt ur din internetuppkoppling.',
    category: 'Teknik',
    date: '30 Jan 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  },
  {
    id: 7,
    title: 'Allsvenskan 2026 — Stream alla matcher med MYIPTVNORDIC',
    excerpt: 'Ny säsong, ny spänning. Så här följer du ditt lag genom hela Allsvenskan i Full HD.',
    category: 'Sport',
    date: '27 Jan 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
  },
  {
    id: 8,
    title: 'IPTV på Apple TV 4K — Den ultimata guiden',
    excerpt: 'Apple TV 4K i kombination med IPTV ger en fantastisk upplevelse. Här visar vi hur du konfigurerar allt.',
    category: 'Guider',
    date: '24 Jan 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?w=800&q=80',
  },
  {
    id: 9,
    title: '5 anledningar att välja MYIPTVNORDIC framför konkurrenterna',
    excerpt: 'Kvalitet, stabilitet, support, utbud och pris. Vi förklarar varför vi är det bästa valet för nordiska användare.',
    category: 'Nyheter',
    date: '20 Jan 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&q=80',
  },
];

const categoryColors: Record<string, string> = {
  'Guider': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Nyheter': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Tips & Tricks': 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  'Sport': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  'Teknik': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Alla');

  const filteredPosts = activeCategory === 'Alla'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const featuredPost = BLOG_POSTS.find(p => p.featured);
  const gridPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'Alla');

  return (
    <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden min-h-screen">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block">BLOGG</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Senaste <span className="text-indigo-400">nytt</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Guider, tips, nyheter och allt du behöver veta om IPTV och streaming. Håll dig uppdaterad med MYIPTVNORDIC.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === 'Alla' && featuredPost && (
          <div className="mb-16">
            <div className="group relative bg-slate-900/40 border border-white/5 rounded-[32px] overflow-hidden hover:border-indigo-500/20 transition-all duration-500 cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto md:min-h-[420px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/50 md:block hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent md:hidden"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
                      Utvald
                    </span>
                  </div>
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${categoryColors[featuredPost.category]}`}>
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-500 text-xs font-bold">{featuredPost.date}</span>
                    <span className="text-slate-600 text-xs font-bold flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div>
                    <span className="inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                      Läs mer
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === 'Alla' ? gridPosts.filter(p => !p.featured) : gridPosts).map((post) => (
            <article
              key={post.id}
              className="group bg-slate-900/40 border border-white/5 rounded-[28px] overflow-hidden hover:border-indigo-500/20 hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border backdrop-blur-sm ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-slate-500 text-xs font-bold">{post.date}</span>
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  <span className="text-slate-600 text-xs font-bold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-black mb-3 group-hover:text-indigo-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-indigo-400 font-black text-xs uppercase tracking-[0.15em] group-hover:gap-3 transition-all">
                    Läs mer
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-slate-300 mb-2">Inga inlägg hittades</h3>
            <p className="text-slate-500 font-medium">Det finns inga inlägg i denna kategori ännu.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-24 max-w-4xl mx-auto p-12 rounded-[40px] bg-indigo-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-4">Missa aldrig en uppdatering</h3>
              <p className="text-indigo-100 font-medium max-w-xl">
                Följ oss för de senaste guiderna, tipsen och nyheterna om IPTV och streaming. Kontakta oss för att alltid vara uppdaterad.
              </p>
            </div>
            <a
              href="https://wa.me/447449708976?text=Hej%2C%20jag%20vill%20h%C3%A5lla%20mig%20uppdaterad%20om%20MYIPTVNORDIC."
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-indigo-600 font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 hover:scale-105 transition-all shadow-xl shadow-black/10 whitespace-nowrap"
            >
              Kontakta Oss
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
