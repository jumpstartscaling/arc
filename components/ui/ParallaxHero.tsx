'use client';

import React, { useEffect, useState } from 'react';

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  palette?: 'gold' | 'emerald' | 'blue';
}

export default function ParallaxHero({ title, subtitle, palette = 'gold' }: ParallaxHeroProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradients = {
    gold: 'from-[#FFE5A0]/20 via-transparent to-transparent',
    emerald: 'from-[#A7F3D0]/20 via-transparent to-transparent',
    blue: 'from-[#BFDBFE]/20 via-transparent to-transparent'
  };

  const accentColors = {
    gold: 'text-[#FFE5A0]',
    emerald: 'text-[#34D399]',
    blue: 'text-[#3B82F6]'
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${gradients[palette]} opacity-50 z-0`}
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className={`text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter ${accentColors[palette]}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-deep to-transparent z-20" />
    </section>
  );
}
