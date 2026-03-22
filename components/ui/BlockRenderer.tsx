import React from 'react';
import ServiceHero from './ServiceHero';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

interface Block {
  type: string;
  data: any;
}

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'hero':
            return (
              <ServiceHero 
                key={index}
                title={block.data.title}
                subtitle={block.data.subtitle}
                palette={block.data.palette || 'gold'}
              />
            );
          case 'text':
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="container mx-auto px-6 max-w-4xl py-12">
                  <GlassCard title={block.data.title}>
                    <div 
                      className="prose prose-invert prose-lg max-w-none text-white/80"
                      dangerouslySetInnerHTML={{ __html: block.data.content }}
                    />
                  </GlassCard>
                </div>
              </AnimatedSection>
            );
          default:
            return <div key={index}>Unknown block type: {block.type}</div>;
        }
      })}
    </>
  );
}
