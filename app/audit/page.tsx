import ScalingSurvey from "@/components/interactivity/ScalingSurvey";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Free Moat Audit | Jumpstart Scaling",
  description: "60-second interactive quiz to score your growth defensibility and get a custom scaling roadmap.",
};

export default function AuditPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent opacity-10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-glow opacity-5 blur-[150px] rounded-full"></div>
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Is Your Growth Built on a <br />
              <span className="gradient-text">House of Cards?</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Most SaaS companies scale until they break. Identify the exact bottlenecks preventing you from reaching <span className="text-accent font-bold">$10M+ ARR</span>.
            </p>
            <p className="mt-6 text-accent font-mono text-sm tracking-widest uppercase">
              60-Second Assessment • Personal Roadmap • 100% Free
            </p>
          </div>

          {/* Value Prop Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <AnimatedSection delay={100}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:border-accent/30 transition-colors">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2 text-white">Find Invisible Leaks</h3>
                <p className="text-white/60">Pinpoint where you're losing money in your acquisition funnel—from ad spend waste to churn.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:border-accent/30 transition-colors">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2 text-white">Benchmark Against Top 1%</h3>
                <p className="text-white/60">See how your metrics (CAC, LTV, Retention) stack up against SaaS leaders.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:border-accent/30 transition-colors">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold mb-2 text-white">Get a Custom Roadmap</h3>
                <p className="text-white/60">Receive a detailed, prioritized action plan tailored to your specific growth stage.</p>
              </div>
            </AnimatedSection>
          </div>

          {/* The Audit Tool */}
          <div id="audit-tool" className="scroll-mt-24">
            <ScalingSurvey />
          </div>

          {/* Social Proof / Trust */}
          <div className="mt-24 text-center border-t border-white/10 pt-16">
            <p className="text-sm text-white/40 uppercase tracking-widest mb-8">Trusted by founders scaling from $1M to $50M</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-500">
              <span className="text-xl font-bold font-serif text-white">Acme Corp</span>
              <span className="text-xl font-bold font-mono text-white">TechFlow</span>
              <span className="text-xl font-bold italic text-white">ScaleUp</span>
              <span className="text-xl font-bold text-white">VentureOne</span>
            </div>
          </div>

          {/* Final FAQ/Note */}
          <div className="mt-20 max-w-3xl mx-auto text-center pb-20">
            <h3 className="text-2xl font-bold mb-4 text-white">Why is this free?</h3>
            <p className="text-white/60 mb-8">
              We believe in value first. This audit gives you clarity. If you need help executing the roadmap, we hope you'll consider Jumpstart Scaling as your partner. If not, you still walk away with a winning strategy.
            </p>
            <p className="text-xs text-white/30">
              🔒 Your data is secure. We calculate your score locally and only use your email to send your report.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
