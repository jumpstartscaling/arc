import React from 'react';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';

const articles = [
  {
    slug: 'crm-automation-growth',
    title: 'CRM Automation: The Engine of Growth',
    description: 'How to turn your CRM from a digital filing cabinet into an automated revenue engine.',
    publishedAt: '2026-02-15',
    readTime: '8 MIN'
  },
  {
    slug: 'market-domination-strategy',
    title: 'Market Domination Strategy',
    description: 'Engineering defensible moats in the age of AI and commoditized marketing.',
    publishedAt: '2026-02-10',
    readTime: '12 MIN'
  },
  {
    slug: 'how-i-build',
    title: 'How I Build: The Growth Stack',
    description: 'A deep dive into the technical architecture we use to scale modern SaaS companies.',
    publishedAt: '2026-02-01',
    readTime: '15 MIN'
  }
];

export const metadata = {
  title: "Intel & Insights | Jumpstart Scaling",
  description: "Deep-dive articles on growth engineering, paid media, CRM automation, data attribution, and market domination strategy.",
};

export default function IntelIndexPage() {
  return (
    <div className="bg-black min-h-screen pb-20">
      <div className="pt-24 pb-12 border-b border-white/10" data-palette="emerald">
        <Hero 
          title="Intel & Insights" 
          subtitle="Data-driven strategies, frameworks, and playbooks for scaling without chaos." 
        />
      </div>

      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-12">
          {articles.map((a, i) => (
            <article key={i} className="group relative flex flex-col md:flex-row gap-8 items-start border-b border-white/5 pb-12 last:border-0">
              <div className="md:w-1/4 pt-1">
                <div className="text-accent font-mono text-xs uppercase tracking-widest mb-2">
                  {new Date(a.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="text-white/40 text-sm font-mono">
                  READ TIME: {a.readTime}
                </div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-3xl font-black text-white mb-3 group-hover:text-accent transition-colors">
                  <Link href={`/intel/${a.slug}`}>
                    {a.title}
                  </Link>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  {a.description}
                </p>
                <Link href={`/intel/${a.slug}`} className="inline-flex items-center text-accent font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">
                  Read Intel <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
