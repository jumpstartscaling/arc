import React from 'react';

interface PullQuoteProps {
  text: string;
  author?: string;
}

export default function PullQuote({ text, author }: PullQuoteProps) {
  return (
    <div className="quote-container my-24 relative max-w-5xl mx-auto px-6 py-12"
         style={{
           backgroundImage: 'radial-gradient(circle at center, rgba(232, 198, 119, 0.03) 0%, transparent 70%)'
         }}>
      <div className="absolute top-0 left-0 text-9xl font-serif text-accent opacity-10 pointer-events-none select-none">“</div>
      <blockquote className="relative z-10">
        <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8 tracking-tight italic">
          {text}
        </p>
        {author && (
          <footer className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-accent"></div>
            <cite className="text-lg font-mono text-accent uppercase tracking-widest not-italic">{author}</cite>
          </footer>
        )}
      </blockquote>
      <div className="absolute bottom-0 right-0 text-9xl font-serif text-accent opacity-10 pointer-events-none select-none translate-y-8">”</div>
    </div>
  );
}
