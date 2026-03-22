import React from 'react';
import OfferForm from '@/components/ui/OfferForm';

export const metadata = {
  title: 'The Growth Engineering Framework | Jumpstart Scaling',
  description: 'A mathematical approach to scaling your SaaS. Move from random experiments to predictable growth.',
};

export default function FrameworkOfferPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">ENGINEERING</span> FRAMEWORK
          </h1>
          <p className="text-2xl text-blue-400 mb-12 max-w-4xl mx-auto font-medium">
            A mathematical approach to scaling. Stop guessing, start engineering.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-blue-600/5 border-y border-blue-600/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Metric Precision", desc: "We map every stage of your funnel to a mathematical variable. Identify the exact lever to pull for growth." },
              { title: "Systemic Scaling", desc: "Build systems that don't break as you scale. We engineer the infrastructure of $10M+ ARR companies." },
              { title: "Revenue Ops", desc: "Align your marketing, sales, and product data into a single source of truth for predictable scaling." }
            ].map((prop, i) => (
              <div key={i} className="bg-black/40 border border-blue-600/20 p-8 rounded-2xl">
                <h3 className="text-2xl text-blue-400 font-bold mb-4">{prop.title}</h3>
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
            <div className="mb-12 border-l-4 border-blue-600 pl-8">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Apply for Growth Engineering</h2>
              <p className="text-gray-400">Join the top 1% of SaaS companies using engineered growth stacks.</p>
            </div>
            <OfferForm palette="blue" />
          </div>
        </div>
      </section>
    </div>
  );
}
