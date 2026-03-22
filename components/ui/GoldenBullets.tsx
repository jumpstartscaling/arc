import React from 'react';

interface Props {
  items: string[];
  title?: string;
}

export default function GoldenBullets({ items, title = 'Key Deliverables & Metrics' }: Props) {
  return (
    <section className="max-w-[800px] mx-auto my-16 px-6">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
          {title}
        </span>
      </h2>
      <ul className="list-none p-0 m-0 flex flex-col gap-5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-4 text-lg md:text-xl leading-relaxed text-white/70 hover:text-white transition-colors duration-200">
            <span className="text-[#D4AF37] text-xl shrink-0 mt-0.5" aria-hidden="true">✦</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
