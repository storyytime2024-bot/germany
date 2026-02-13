
import React from 'react';
import ChannelScroller from '../components/ChannelScroller';
import ChannelList from '../components/ChannelList';

const KanalerPage: React.FC = () => {
  return (
    <>
      <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 block">LIVE TV</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12">Alla dina favoritkanaler</h2>
          <ChannelScroller />

          <ChannelList />
        </div>
      </section>
    </>
  );
};

export default KanalerPage;
