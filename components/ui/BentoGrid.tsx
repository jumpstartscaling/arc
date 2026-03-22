import React from 'react';
import Link from 'next/link';

interface BentoItem {
  title: string;
  desc: string;
  link: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 max-w-6xl mx-auto">
      {items.map((item, i) => (
        <Link 
          key={i}
          href={item.link} 
          className={`glass-card block p-8 hover:border-accent hover:-translate-y-1 transition-all duration-300 ${
            i % 4 === 0 || i % 4 === 3 ? 'md:col-span-2' : ''
          }`}
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">{item.title}</h3>
          <p className="text-white/70 leading-relaxed text-lg">{item.desc}</p>
        </Link>
      ))}
    </div>
  );
}
