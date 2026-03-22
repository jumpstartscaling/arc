import React from 'react';
import MoatAudit from '@/components/interactivity/MoatAudit';

export const metadata = {
  title: 'Moat Strength Audit | Jumpstart Scaling',
  description: 'Analyze your competitive moat and identify revenue leakage caused by system friction.',
};

export default function MoatAuditPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            MOAT <span className="text-[#C9A961]">DIAGNOSTIC</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Identify the specific friction points throttling your revenue velocity.
          </p>
        </div>
        <MoatAudit />
      </div>
    </div>
  );
}
