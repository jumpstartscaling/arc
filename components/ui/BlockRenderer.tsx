import React from 'react';
import ServiceHero from './ServiceHero';
import ParallaxHero from './ParallaxHero';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import BentoGrid, { BentoItem } from './BentoGrid';
import PullQuote from './PullQuote';
import InteractiveTimeline from './InteractiveTimeline';
import CTA from './CTA';
import ScalingSurvey from '../interactivity/ScalingSurvey';
import ROASCalculator from '../calculators/ROASCalculator';
import ImagePlaceholder from './ImagePlaceholder';
import LazyVideo from './LazyVideo';

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
          case 'parallax-hero':
            return (
              <ParallaxHero
                key={index}
                title={block.data.title}
                subtitle={block.data.subtitle}
                palette={block.data.palette || 'gold'}
              />
            );
          case 'text':
            return (
              <AnimatedSection key={index} delay={index * 100} className="w-full flex flex-col">
                <div 
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: block.data.content }}
                />
              </AnimatedSection>
            );
          case 'bento':
            return (
              <div key={index} className="container mx-auto px-6 py-20">
                <BentoGrid>
                  {block.data.items.map((item: any, i: number) => (
                    <BentoItem 
                      key={i}
                      title={item.title}
                      description={item.description}
                      className={item.className}
                    />
                  ))}
                </BentoGrid>
              </div>
            );
          case 'pull-quote':
            return (
              <div key={index} className="container mx-auto px-6 max-w-3xl">
                <PullQuote 
                  quote={block.data.quote}
                  author={block.data.author}
                  role={block.data.role}
                  palette={block.data.palette}
                />
              </div>
            );
          case 'timeline':
            return (
              <div key={index} className="container mx-auto px-6 py-20">
                <InteractiveTimeline events={block.data.events} />
              </div>
            );
          case 'cta':
            return (
              <div key={index} className="container mx-auto px-6 py-12">
                <CTA heading={block.data.heading} text={block.data.text} />
              </div>
            );
          case 'scaling-survey':
            return (
              <div key={index} className="container mx-auto px-6 py-20">
                <ScalingSurvey />
              </div>
            );
          case 'roas-calculator':
            return (
              <div key={index} className="container mx-auto px-6 py-20">
                <ROASCalculator />
              </div>
            );
          case 'image':
            return (
              <div key={index} className="container mx-auto px-6 py-12 flex justify-center">
                <ImagePlaceholder text={block.data.alt} width={block.data.width} height={block.data.height} />
              </div>
            );
          case 'video':
            return (
              <div key={index} className="container mx-auto px-6 py-12 max-w-4xl">
                <LazyVideo src={block.data.src} poster={block.data.poster} />
              </div>
            );
          default:
            return <div key={index} className="text-white/20 text-center py-4">Unknown block: {block.type}</div>;
        }
      })}
    </>
  );
}
