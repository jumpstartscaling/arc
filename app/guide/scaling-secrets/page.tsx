import React from 'react';
import GlassCard from '@/components/ui/GlassCard';
import GoldenBullets from '@/components/ui/GoldenBullets';
import CTA from '@/components/ui/CTA';

export const metadata = {
  title: 'Scaling Secrets: 10 Systems of High-Growth Startups | Jumpstart Scaling',
  description: 'Learn the foundational frameworks for scaling your SaaS through engineering, not experiments.',
};

export default function ScalingSecretsPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20 pt-32">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-12 text-center">
                SCALING <span className="text-[#C9A961]">SECRETS</span>
            </h1>

            <div className="space-y-16">
                <GlassCard title="Foundations of Scalable Revenue">
                    <p className="text-xl text-white/80 leading-relaxed mb-6">
                        Scaling isn&apos;t about adding more fuel (ad spend) to a leaking engine. It&apos;s about engineering the engine itself to handle higher throughput with higher efficiency.
                    </p>
                    <p className="text-xl text-white/80 leading-relaxed">
                        Here are the 10 systems every high-growth startup must master to reach the $10M+ ARR milestone.
                    </p>
                </GlassCard>

                <GoldenBullets 
                    title="The Core Scaling Frameworks"
                    items={[
                        "Dynamic Unit Economics: Move beyond static CAC/LTV into real-time payback period tracking.",
                        "Obsessive Retention Loops: Turn every customer interaction into a product engagement signal.",
                        "Marketing Infrastructure: Treat ad attribution as an engineering problem, not a set-it-and-forget-it task.",
                        "Sales Velocity Automation: Use CRM signals to trigger sales activity without human oversight.",
                        "Capital Efficiency: Scaling with a focused burn-to-growth ratio."
                    ]}
                />

                <GlassCard title="Case Study: Real Numbers from a Real Company">
                    <div className="space-y-6">
                        <p className="text-white/70">A SaaS company we advised reached these numbers after 18 months of optimization:</p>
                        <ul className="grid grid-cols-2 gap-4">
                            <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="block text-accent font-bold">ARR</span>
                                <span className="text-2xl">$8.2M</span>
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="block text-accent font-bold">Churn</span>
                                <span className="text-2xl">2.5%</span>
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="block text-accent font-bold">CAC</span>
                                <span className="text-2xl">$1,800</span>
                            </li>
                            <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <span className="block text-accent font-bold">LTV</span>
                                <span className="text-2xl">$28,000</span>
                            </li>
                        </ul>
                    </div>
                </GlassCard>

                <GoldenBullets 
                    title="Your Action Plan Starting Tomorrow"
                    items={[
                        "Week 1-2: Calculate true CAC and LTV, measure retention cohorts.",
                        "Week 3-4: Improve onboarding to reduce time-to-value.",
                        "Month 2-3: Document core processes and implement automation tools.",
                        "Month 4+: Increase marketing spend 20% month-over-month."
                    ]}
                />

                <CTA 
                    heading="Ready to Scale the Right Way?" 
                    text="Book a free strategy session with our team and start building systems that compound." 
                />
            </div>
        </div>
    </div>
  );
}
