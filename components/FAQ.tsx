
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[350px,1fr] gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-black sticky top-32 leading-tight">Häufig <br />gestellte <br /><span className="text-blue-200">Fragen</span></h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-bold transition-colors ${openIndex === idx ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
