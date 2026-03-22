'use client';

import React from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function LazyVideo({ src, poster, className = '' }: LazyVideoProps) {
  return (
    <div className={`relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 group ${className}`}>
      <video
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent" />
    </div>
  );
}
