import React from 'react';
import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContentSlugs } from '@/lib/content';
import BlockRenderer from '@/components/ui/BlockRenderer';

export const dynamic = 'force-dynamic';

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getContentBySlug(`tools/${slug}`);

  if (!page) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <BlockRenderer blocks={page.blocks} />
    </div>
  );
}
