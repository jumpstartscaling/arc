import React from 'react';
import { getAllContentSlugs, getContentBySlug } from '@/lib/content';
import ServiceHero from '@/components/ui/ServiceHero';
import ServiceTeaser from '@/components/ui/ServiceTeaser';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const dynamic = 'force-dynamic';

export default async function ToolsIndex() {
  const slugs = await getAllContentSlugs();
  const toolSlugs = slugs.filter(slug => slug.startsWith('tools/'));
  
  const tools = await Promise.all(
    toolSlugs.map(async (slug) => {
      const page = await getContentBySlug(slug);
      return {
        slug: slug.replace('tools/', ''),
        title: page?.title || 'Unknown Tool',
        description: page?.excerpt || 'A powerful growth engineering tool.',
      };
    })
  );

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <ServiceHero 
        title="Growth Tools" 
        subtitle="Benchmark your metrics against the top 1% of SaaS companies."
        palette="gold"
      />
      
      <div className="container mx-auto px-6 max-w-6xl mt-20">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <ServiceTeaser
                key={tool.slug}
                slug={`/tools/${tool.slug}`}
                title={tool.title}
                description={tool.description}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
