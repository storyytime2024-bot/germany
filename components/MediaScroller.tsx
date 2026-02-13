
import React from 'react';

interface MediaItem {
  id: number;
  title: string;
  img: string;
}

interface MediaScrollerProps {
  title: string;
  tag: string;
  items: MediaItem[];
}

const MediaScroller: React.FC<MediaScrollerProps> = ({ title, tag, items }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-fuchsia-400 text-xs font-bold tracking-widest uppercase mb-2 block">{tag}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
        </div>
        <span className="text-xs font-bold text-white/50 tracking-widest">DIREKT TILLGÄNGLIGT I 4K</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="min-w-[180px] md:min-w-[220px] group cursor-pointer snap-start">
            <div className="rounded-xl overflow-hidden mb-3 aspect-[2/3] relative">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h4 className="font-bold text-sm">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaScroller;
