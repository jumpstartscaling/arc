import React from 'react';
import AtmosphereParticles from '../visuals/AtmosphereParticles';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  city?: string;
  palette?: 'gold' | 'emerald' | 'sapphire';
}

export default function ServiceHero({ title, subtitle, city, palette = 'gold' }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-24" data-palette={palette}>
      <div className="absolute inset-0 z-0">
        <AtmosphereParticles />
      </div>
      
      <div className="container relative z-10 max-w-6xl mx-auto px-6 text-center lg:text-left">
        {city && (
          <span className="text-accent font-mono uppercase tracking-widest text-sm mb-6 block">
            Market Insight: {city}
          </span>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tighter text-white">
          {title}
        </h1>
        <p className="max-w-2xl text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
    </section>
  );
}
