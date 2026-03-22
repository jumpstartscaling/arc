import React from 'react';

interface PullQuoteProps {
  quote: string;
  author?: string;
  role?: string;
  palette?: 'gold' | 'emerald' | 'blue';
}

export default function PullQuote({ quote, author, role, palette = 'gold' }: PullQuoteProps) {
  const colors = {
    gold: 'from-[#FFE5A0] to-[#E8C677]',
    emerald: 'from-[#A7F3D0] to-[#34D399]',
    blue: 'from-[#BFDBFE] to-[#3B82F6]'
  };

  return (
    <div className="relative py-12 px-8 my-12 overflow-hidden rounded-3xl bg-white/5 border border-white/10">
      <div className="absolute top-0 right-0 p-8 text-8xl text-white/5 font-serif select-none pointer-events-none">"</div>
      
      <div className="relative z-10">
        <blockquote className={`text-2xl md:text-3xl font-bold italic leading-tight bg-gradient-to-r ${colors[palette]} bg-clip-text text-transparent mb-8`}>
          "{quote}"
        </blockquote>
        
        {(author || role) && (
          <div className="flex flex-col">
            {author && <span className="text-white font-bold text-lg">{author}</span>}
            {role && <span className="text-white/50 text-sm tracking-wide uppercase">{role}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
