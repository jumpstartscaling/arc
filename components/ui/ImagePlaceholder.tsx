import React from 'react';

export default function ImagePlaceholder({ width = 800, height = 450, text }: { width?: number; height?: number; text?: string }) {
  return (
    <div 
      className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-[#FFE5A0]/30 transition-colors"
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <div className="text-center p-8">
        <div className="w-12 h-12 border-2 border-[#FFE5A0]/20 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
           <svg className="w-6 h-6 text-[#FFE5A0]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
        </div>
        <p className="text-white/30 text-sm font-mono tracking-widest uppercase">
          {text || `${width}x${height}_VISUAL_ASSET`}
        </p>
      </div>
    </div>
  );
}
