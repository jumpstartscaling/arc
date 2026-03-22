"use client";

import React from 'react';
import ServiceHero from '@/components/ui/ServiceHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import InteractiveROICalculator from '@/components/interactivity/InteractiveROICalculator';
import CACCalculator from '@/components/calculators/CACCalculator';
import LTVCalculator from '@/components/calculators/LTVCalculator';
import ChurnCalculator from '@/components/calculators/ChurnCalculator';
import BreakEvenCalculator from '@/components/calculators/BreakEvenCalculator';
import MRRForecastCalculator from '@/components/calculators/MRRForecastCalculator';
import EmailROICalculator from '@/components/calculators/EmailROICalculator';

export default function CalculatorsPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <ServiceHero 
        title="Growth Calculators" 
        subtitle="Benchmark your metrics against the top 1% of SaaS companies."
        palette="gold"
      />
      
      <div className="container mx-auto px-6 max-w-6xl mt-20 space-y-32">
        {/* ROI Calculator */}
        <AnimatedSection id="roi-calculator">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Revenue Growth Calculator</h2>
            <p className="text-xl text-white/60">Calculate the potential impact of engineering your revenue stack.</p>
          </div>
          <InteractiveROICalculator />
        </AnimatedSection>

        {/* CAC Calculator */}
        <AnimatedSection id="cac-calculator">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">CAC & Efficiency Audit</h2>
            <p className="text-xl text-white/60">Identify the true cost of customer acquisition across all channels.</p>
          </div>
          <CACCalculator />
        </AnimatedSection>

        {/* LTV Calculator */}
        <AnimatedSection id="ltv-calculator">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">LTV & Unit Economics</h2>
            <p className="text-xl text-white/60">Model your customer lifetime value and LTV:CAC ratios.</p>
          </div>
          <LTVCalculator />
        </AnimatedSection>

        {/* Churn Calculator */}
        <AnimatedSection id="churn-calculator">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Churn Analysis</h2>
            <p className="text-xl text-white/60">Measure customer attrition and identify retention leaks.</p>
          </div>
          <ChurnCalculator />
        </AnimatedSection>

        {/* Break-Even Calculator */}
        <AnimatedSection id="break-even-calculator">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Break-Even ROAS</h2>
            <p className="text-xl text-white/60">Find the exact ad spend efficiency needed to be profitable.</p>
          </div>
          <BreakEvenCalculator />
        </AnimatedSection>

        {/* MRR Forecast */}
        <AnimatedSection id="mrr-forecast">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">MRR Growth Forecast</h2>
            <p className="text-xl text-white/60">Project recurring revenue growth over the next 12 months.</p>
          </div>
          <MRRForecastCalculator />
        </AnimatedSection>

        {/* Email ROI */}
        <AnimatedSection id="email-roi-calculator">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Email & CRM ROI</h2>
            <p className="text-xl text-white/60">Measure the profitability of your CRM and email automation.</p>
          </div>
          <EmailROICalculator />
        </AnimatedSection>
      </div>

      {/* Final CTA */}
      <section className="section dark py-32 text-center mt-32">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black gradient-text mb-12">
            Ready to Turn These Insights Into Millions?
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-16 max-w-4xl mx-auto">
            These calculators reveal your biggest opportunities. Our audit turns them into predictable revenue.
          </p>
          <a href="/audit" className="inline-block px-16 py-8 bg-white text-black font-bold text-3xl rounded-3xl hover:scale-105 transition shadow-2xl">
            Get Your Free Growth Audit
          </a>
        </div>
      </section>
    </div>
  );
}
