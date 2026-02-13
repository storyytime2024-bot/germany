
import React from 'react';

interface ScrollingBannerProps {
  texts: string[];
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({ texts }) => {
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <div className="flex animate-scroll gap-12 items-center">
        {Array(2).fill(0).map((_, i) => (
          <React.Fragment key={i}>
            {texts.map((text, idx) => (
              <span key={idx} className="text-lg font-black tracking-widest text-white/90">
                {text}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
