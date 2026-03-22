import React from 'react';
import ServiceHero from '@/components/ui/ServiceHero';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/ui/CTA';

const articles = {
  'crm-automation-growth': {
    title: 'CRM Automation: The Engine of Growth',
    description: 'How to turn your CRM from a digital filing cabinet into an automated revenue engine.',
    city: 'San Francisco',
    content: (
      <div className="prose prose-invert prose-gold max-w-none">
        <section>
          <h2>The Death of the Manual CRM</h2>
          <p>The traditional method of CRM management—manual data entry by sales reps—is failing. It creates a lagging indicator of performance rather than a leading indicator of growth. Modern scaling requires a CRM that acts as an autonomous central nervous system.</p>
          <p>By automating the data collection and lead routing processes, we eliminate human error and ensure that every opportunity is captured and nurtured with mathematical precision.</p>
        </section>
        
        <GlassCard title="Key Automation Frameworks">
          <ul className="space-y-4 text-white/80">
            <li><strong>Intent-Based Routing:</strong> Automatically assigning leads based on page-level behavior and engagement depth.</li>
            <li><strong>Automated Deal Progression:</strong> Moving stages based on contract views, meeting bookings, and product usage data.</li>
            <li><strong>Reactivation Loops:</strong> Triggering sales tasks and personalized emails when &quot;cold&quot; leads revisit the site.</li>
          </ul>
        </GlassCard>

        <section className="mt-12">
          <h2>Why It Matters</h2>
          <p>Data without automation is just noise. Automation without data is dangerous. But combined, they create a defensible growth moat that competitors cannot easily replicate. Your CRM should be your most valuable employee—one that never sleeps and never forgets to follow up.</p>
        </section>
      </div>
    )
  },
  // Add other articles...
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export default async function IntelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles] || {
    title: 'Intel Article',
    description: 'Coming Soon...',
    city: 'Global',
    content: <p>Full article content coming soon.</p>
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div data-palette="emerald">
        <ServiceHero 
          title={article.title} 
          subtitle={article.description}
          city={article.city}
          palette="emerald"
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl mt-20">
        <AnimatedSection>
          {article.content}
        </AnimatedSection>

        <div className="mt-20">
          <CTA heading="Ready to Audit Your CRM?" text="Discover the hidden revenue leaks in your current growth stack." />
        </div>
      </div>
    </div>
  );
}
