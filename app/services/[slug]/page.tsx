import React from 'react';
import ServiceHero from '@/components/ui/ServiceHero';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BentoGrid from '@/components/ui/BentoGrid';
import PullQuote from '@/components/ui/PullQuote';
import CTA from '@/components/ui/CTA';

// Simple content mapping for Services
const services = {
  'crm-transformation': {
    title: 'CRM Transformation',
    subtitle: 'Engineering the Infrastructure of Predictable Revenue',
    palette: 'gold' as const,
    content: (
      <>
        <AnimatedSection>
          <GlassCard title=" The Problem: Passive Data Silos">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Most companies treat their CRM as a digital filing cabinet. It’s where data goes to die. Sales reps hate it, leadership doesn’t trust it, and marketing can’t use it for attribution. This creates a &quot;Passive Data Silo&quot; that prevents you from seeing which activities actually drive revenue.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              When your CRM is passive, you scale by adding more people to manage the mess. This increases your churn, lowers your margins, and makes your growth fragile.
            </p>
          </GlassCard>
        </AnimatedSection>

        <PullQuote text="The transformation from passive CRM to automated revenue system is not a technology project. It is a revenue strategy implementation that happens to use technology." />

        <AnimatedSection delay={200}>
          <GlassCard title="The Solution: The Automated Revenue System">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              We re-engineer your CRM from the ground up to be an active participant in your growth. We don&apos;t just set up fields; we build automated workflows that move leads through your funnel with zero friction.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-accent font-bold mb-4">Lifecycle Automation</h4>
                <p className="text-sm text-white/60">Automated lead routing, status updates, and task management based on real-time activity.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-accent font-bold mb-4">Revenue Attribution</h4>
                <p className="text-sm text-white/60">Connecting every dollar of closed revenue back to the original marketing source.</p>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
        
        <BentoGrid items={[
          {title: "CRM Transformation Service", desc: "Let us engineer your CRM for revenue growth.", link: "/services/crm-transformation"},
          {title: "Funnel Architecture", desc: "Feed your automated CRM with high-quality leads.", link: "/services/funnel-architecture"},
          {title: "Data Attribution", desc: "Connect CRM revenue data back to ad spend.", link: "/services/data-attribution"}
        ]} />

        <CTA heading="Want Us to Transform Your CRM?" text="We engineer CRM systems that turn every lead into a trackable revenue opportunity. Start with a free audit." href="/contact" />
      </>
    )
  },
  // Add other services as needed...
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <ServiceHero 
        title={service.title} 
        subtitle={service.subtitle}
        palette={service.palette}
      />
      
      <div className="container mx-auto px-6 max-w-6xl mt-20">
        {service.content}
      </div>
    </div>
  );
}
