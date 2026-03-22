"use client";

import React from 'react';
import OfferForm from '@/components/ui/OfferForm';

export default function N8NOfferPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          THE <span className="text-[#00FF94]">N8N</span> FRAMEWORK
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
          Scale your recurring revenue with absolute engineering precision. No more Zapier &quot;luck.&quot;
        </p>

        <div className="bg-[#111] p-8 md:p-12 rounded-2xl border border-[#333] text-left">
          <div className="mb-10 border-l-4 border-[#00FF94] pl-6">
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tighter">Application for Engineering Phase</h2>
            <p className="text-gray-400">This is where the chaos ends and the engineering begins.</p>
          </div>
          <OfferForm palette="emerald" />
        </div>
      </div>
    </div>
  );
}
