'use client';

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export default function InteractiveTimeline({ events }: { events: TimelineEvent[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!events || events.length === 0) return null;

  return (
    <div className="py-12">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          {events.map((event, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group flex flex-col items-center text-center transition-all duration-300 ${index === activeIndex ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
            >
              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold mb-4 transition-colors ${index === activeIndex ? 'bg-[#FFE5A0] border-[#E8C677] text-bg-deep' : 'bg-bg-deep border-white/20 text-white'}`}>
                {index + 1}
              </div>
              <span className={`text-sm font-black tracking-widest uppercase ${index === activeIndex ? 'text-[#FFE5A0]' : 'text-white'}`}>
                {event.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <AnimatedSection key={activeIndex}>
          <div className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-xl">
            <h3 className="text-3xl font-black text-[#FFE5A0] mb-6 tracking-tight">
              {events[activeIndex].title}
            </h3>
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              {events[activeIndex].description}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
