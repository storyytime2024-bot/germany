
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

const CATEGORIES = ['Alle', 'Anleitungen', 'Neuigkeiten', 'Tipps & Tricks', 'Sport', 'Technik'];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'So installierst du IPTV auf deinem Smart TV — Komplette Anleitung 2026',
    excerpt: 'Schritt-für-Schritt-Anleitung für den Einstieg mit IPTV auf Samsung, LG, Sony und anderen Smart TVs. Einfacher als du denkst.',
    category: 'Anleitungen',
    date: '12. Feb. 2026',
    readTime: '8 Min.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Beste IPTV-Apps 2026 — Unsere Topliste',
    excerpt: 'Wir vergleichen TiviMate, IPTV Smarters, GSE Smart IPTV und mehr. Welche App passt am besten zu dir?',
    category: 'Tipps & Tricks',
    date: '10. Feb. 2026',
    readTime: '6 Min.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
  },
  {
    id: 3,
    title: 'Bundesliga 2025/26 — Alle Spiele live streamen',
    excerpt: 'Komplette Anleitung, wie du jedes Bundesliga-Spiel in 4K-Qualität streamst. Verpasse kein Tor mehr.',
    category: 'Sport',
    date: '8. Feb. 2026',
    readTime: '5 Min.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
  },
  {
    id: 4,
    title: 'Warum puffert mein IPTV? 7 einfache Lösungen',
    excerpt: 'Hast du Pufferprobleme? Hier sind die häufigsten Ursachen und wie du sie in wenigen Minuten behebst.',
    category: 'Technik',
    date: '5. Feb. 2026',
    readTime: '7 Min.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  },
  {
    id: 5,
    title: 'IPTV vs. traditionelles TV — Was ist der Unterschied?',
    excerpt: 'Ein tiefgehender Vergleich zwischen IPTV und traditionellem Kabelfernsehen. Erfahre, warum Millionen zu IPTV wechseln.',
    category: 'Neuigkeiten',
    date: '2. Feb. 2026',
    readTime: '10 Min.',
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&q=80',
  },
  {
    id: 6,
    title: 'So optimierst du deinen Router für bestes Streaming',
    excerpt: 'Die richtigen Router-Einstellungen können einen enormen Unterschied machen. Lerne, wie du das Maximum aus deiner Internetverbindung holst.',
    category: 'Technik',
    date: '30. Jan. 2026',
    readTime: '6 Min.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  },
  {
    id: 7,
    title: 'Champions League 2025/26 — So siehst du alle Spiele live',
    excerpt: 'Neue Saison, neue Spannung. So verfolgst du dein Team durch die gesamte Champions League in Full HD.',
    category: 'Sport',
    date: '27. Jan. 2026',
    readTime: '4 Min.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
  },
  {
    id: 8,
    title: 'IPTV auf Apple TV 4K — Die ultimative Anleitung',
    excerpt: 'Apple TV 4K in Kombination mit IPTV bietet ein fantastisches Erlebnis. Hier zeigen wir dir, wie du alles konfigurierst.',
    category: 'Anleitungen',
    date: '24. Jan. 2026',
    readTime: '9 Min.',
    image: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?w=800&q=80',
  },
  {
    id: 9,
    title: '5 Gründe, warum IPTV KAUFEN die beste Wahl ist',
    excerpt: 'Qualität, Stabilität, Support, Angebot und Preis. Wir erklären, warum wir die beste Wahl für deutsche Nutzer sind.',
    category: 'Neuigkeiten',
    date: '20. Jan. 2026',
    readTime: '5 Min.',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&q=80',
  },
];

const categoryColors: Record<string, string> = {
  'Anleitungen': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Neuigkeiten': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Tipps & Tricks': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Sport': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  'Technik': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filteredPosts = activeCategory === 'Alle'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const featuredPost = BLOG_POSTS.find(p => p.featured);
  const gridPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'Alle');

  return (
    <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block">BLOG</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Neueste <span className="text-red-400">Beiträge</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Anleitungen, Tipps, Neuigkeiten und alles, was du über IPTV und Streaming wissen musst. Bleib auf dem Laufenden mit IPTV KAUFEN.
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
                  ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-500/20'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === 'Alle' && featuredPost && (
          <div className="mb-16">
            <div className="group relative bg-slate-900/40 border border-white/5 rounded-[32px] overflow-hidden hover:border-red-500/20 transition-all duration-500 cursor-pointer">
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
                    <span className="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">
                      Empfohlen
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
                  <h2 className="text-2xl md:text-4xl font-black mb-4 group-hover:text-red-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div>
                    <span className="inline-flex items-center gap-2 text-red-400 font-black text-sm uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                      Weiterlesen
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
          {(activeCategory === 'Alle' ? gridPosts.filter(p => !p.featured) : gridPosts).map((post) => (
            <article
              key={post.id}
              className="group bg-slate-900/40 border border-white/5 rounded-[28px] overflow-hidden hover:border-red-500/20 hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col"
            >
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

                <h3 className="text-lg font-black mb-3 group-hover:text-red-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-red-400 font-black text-xs uppercase tracking-[0.15em] group-hover:gap-3 transition-all">
                    Weiterlesen
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
            <h3 className="text-xl font-black text-slate-300 mb-2">Keine Beiträge gefunden</h3>
            <p className="text-slate-500 font-medium">In dieser Kategorie gibt es noch keine Beiträge.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-24 max-w-4xl mx-auto p-12 rounded-[40px] bg-red-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-4">Verpasse nie ein Update</h3>
              <p className="text-red-100 font-medium max-w-xl">
                Folge uns für die neuesten Anleitungen, Tipps und Neuigkeiten rund um IPTV und Streaming. Kontaktiere uns, um immer auf dem Laufenden zu bleiben.
              </p>
            </div>
            <a
              href="https://wa.me/447449708976?text=Hallo%2C%20ich%20möchte%20über%20Neuigkeiten%20von%20IPTV%20KAUFEN%20informiert%20werden."
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-red-600 font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-100 hover:scale-105 transition-all shadow-xl shadow-black/10 whitespace-nowrap"
            >
              Kontaktiere uns
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
