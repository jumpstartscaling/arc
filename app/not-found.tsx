'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import ServiceHero from '@/components/ui/ServiceHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';

export default function NotFound() {
  const pathname = usePathname();
  const [suggestion, setSuggestion] = useState<{ name: string; url: string } | null>(null);

  useEffect(() => {
    // Smart matching logic for slugs
    const slug = pathname.split('/').pop()?.toLowerCase() || '';
    
    // Common mappings - in a real app, this could query the DB
    const commonMatches: Record<string, { name: string; url: string }> = {
      'audit': { name: 'Free Moat Audit', url: '/audit' },
      'moat': { name: 'Moat Diagnostic', url: '/audit/moat' },
      'calculators': { name: 'Growth Tools', url: '/tools' },
      'tools': { name: 'Growth Tools', url: '/tools' },
      'calculator': { name: 'Growth Tools', url: '/tools' },
      'blueprint': { name: 'Scaling Blueprint', url: '/offer/blueprint' },
      'framework': { name: 'Growth Framework', url: '/offer/framework' },
      'n8n': { name: 'N8N Automation Offer', url: '/offer/n8n' },
    };

    // Find closest match
    for (const key in commonMatches) {
      if (slug.includes(key)) {
        setSuggestion(commonMatches[key]);
        break;
      }
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero 
        title="404: System Not Found" 
        subtitle="The growth vector you're looking for was either deprecated or moved."
        palette="gold"
      />
      
      <div className="container mx-auto px-6 max-w-2xl mt-20 text-center">
        <AnimatedSection>
          <GlassCard>
            <div className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6">Looking for something specific?</h2>
              
              {suggestion ? (
                <div className="mb-8">
                  <p className="text-white/70 mb-4">Did you mean this?</p>
                  <Link 
                    href={suggestion.url}
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#FFE5A0] to-[#E8C677] text-bg-deep font-bold rounded-lg hover:scale-105 transition-transform"
                  >
                    {suggestion.name} →
                  </Link>
                </div>
              ) : (
                <p className="text-white/60 mb-8 italic">We couldn't find an exact match for your path.</p>
              )}

              <div className="flex flex-col gap-4">
                <Link href="/" className="text-[#FFE5A0] hover:underline">Return to Command Center</Link>
                <Link href="/tools" className="text-[#FFE5A0] hover:underline">Explore Growth Tools</Link>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
}
