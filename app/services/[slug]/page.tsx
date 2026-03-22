import React from 'react';
import { notFound } from 'next/navigation';
import { getContentBySlug } from '@/lib/content';
import BlockRenderer from '@/components/ui/BlockRenderer';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getContentBySlug(`services/${slug}`);
  
  if (!page) return {};

  return {
    title: `${page.title} | Jumpstart Scaling`,
    description: page.excerpt || `Professional ${page.title} for growth engineering.`,
    openGraph: {
      title: page.title,
      description: page.excerpt,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getContentBySlug(`services/${slug}`);

  if (!page) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": page.title,
            "description": page.excerpt,
            "provider": {
              "@type": "Organization",
              "name": "Jumpstart Scaling"
            }
          })
        }}
      />
      <BlockRenderer blocks={page.blocks} />
    </div>
  );
}
