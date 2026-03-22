import React from 'react';
import { notFound } from 'next/navigation';
import ServiceHero from '@/components/ui/ServiceHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/ui/CTA';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/content';

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function IntelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div data-palette="emerald">
        <ServiceHero 
          title={article.title} 
          subtitle={article.excerpt || ''}
          city="Insight"
          palette="emerald"
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl mt-20 text-white/90">
        <AnimatedSection>
          <div 
            className="prose prose-invert prose-emerald max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </AnimatedSection>

        <div className="mt-20">
          <CTA heading="Ready to Audit Your CRM?" text="Discover the hidden revenue leaks in your current growth stack." />
        </div>
      </div>
    </div>
  );
}
