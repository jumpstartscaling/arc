import React from 'react';
import { notFound } from 'next/navigation';
import { getContentBySlug } from '@/lib/content';
import BlockRenderer from '@/components/ui/BlockRenderer';
import { getToolSchema } from '@/lib/seo';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getContentBySlug(`tools/${slug}`);
  
  if (!tool) return {};

  return {
    title: `${tool.title} | Growth Tool`,
    description: tool.excerpt || `Use our ${tool.title} to optimize your growth.`,
    openGraph: {
      title: tool.title,
      description: tool.excerpt,
    }
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getContentBySlug(`tools/${slug}`);

  if (!page) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={getToolSchema({
          title: page.title,
          description: page.excerpt || '',
          slug: slug
        })}
      />
      <BlockRenderer blocks={page.blocks} />
    </div>
  );
}
