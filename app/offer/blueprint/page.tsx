import React from 'react';
import OfferForm from '@/components/ui/OfferForm';

export const metadata = {
  title: 'Scale Your Startup to $10M+ ARR | Jumpstart Scaling',
  description: 'Proven systems and expert guidance to help startups scale from $1M to $10M+ ARR. Data-driven strategies that work.',
};

export default function BlueprintOfferPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            SCALE TO <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">$10M+ ARR</span>
          </h1>
          <p className="text-2xl text-[#D4AF37] mb-12 max-w-4xl mx-auto font-medium">
            Proven systems, expert operators, and engineering-grade growth strategies.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-[#D4AF37]/5 border-y border-[#D4AF37]/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Data-Driven Logic", desc: "Every strategy is backed by real metrics from companies that successfully scaled. No theory, only proven frameworks." },
              { title: "Unit Economics", desc: "Fix your fundamentals before scaling. We optimize CAC, LTV, and payback periods to ensure sustainable growth." },
              { title: "Expert Operators", desc: "Learn from operators who've scaled multiple startups to $100M+ exits. Avoid the common pitfalls." }
            ].map((prop, i) => (
              <div key={i} className="bg-black/40 border border-[#D4AF37]/20 p-8 rounded-2xl">
                <h3 className="text-2xl text-[#D4AF37] font-bold mb-4">{prop.title}</h3>
                <p className="text-gray-400 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-[#111] p-10 md:p-16 rounded-3xl border border-[#333]">
            <div className="mb-12 border-l-4 border-[#D4AF37] pl-8">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Apply for Scaling Blueprint</h2>
              <p className="text-gray-400">Stop guessing. Start engineering your growth engine.</p>
            </div>
            <OfferForm palette="gold" />
          </div>
        </div>
      </section>
    </div>
  );
}
