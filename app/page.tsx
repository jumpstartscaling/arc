import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("@/components/ui/Hero"), { ssr: true });
const ServiceTeaser = dynamic(() => import("@/components/ui/ServiceTeaser"));
const ScalingSurvey = dynamic(() => import("@/components/interactivity/ScalingSurvey"));
const CTA = dynamic(() => import("@/components/ui/CTA"));
const AnimatedSection = dynamic(() => import("@/components/ui/AnimatedSection"));
const LazyVideo = dynamic(() => import("@/components/ui/LazyVideo"));

const services = [
  {
    id: "paid-acquisition",
    data: {
      title: "Paid Acquisition",
      description: "Engineered media buying that eliminates wasted spend and scales winners.",
      order: 1,
    },
  },
  {
    id: "funnel-architecture",
    data: {
      title: "Funnel Architecture",
      description: "Conversion systems designed to turn cold traffic into qualified opportunities.",
      order: 2,
    },
  },
  {
    id: "crm-transformation",
    data: {
      title: "CRM Transformation",
      description: "CRM automation that ensures no lead is ever left behind.",
      order: 3,
    },
  },
  {
    id: "authority-engine",
    data: {
      title: "Authority Engine",
      description: "Establish market dominance through strategic content and positioning.",
      order: 4,
    },
  },
  {
    id: "growth-retainer",
    data: {
      title: "Growth Retainer",
      description: "Our core engineering partnership for long-term scale.",
      order: 5,
    },
  },
  {
    id: "conversion-audit",
    data: {
      title: "Conversion Audit",
      description: "A deep dive into your current funnel to find hidden leaks.",
      order: 6,
    },
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Growth Engineering."
        subtitle="We build the infrastructure that turns ad spend into predictable revenue. Stop guessing, start scaling."
        variant="full"
      />

      <section className="section dark relative z-10 -mt-20">
        <div className="container mx-auto px-6">
          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 hover:-translate-y-2 transition duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2 text-white">Paid Acquisition</h3>
                <p className="text-white/60 text-sm">Engineered media buying that eliminates wasted spend and scales winners.</p>
              </div>
              <div className="glass-card p-8 hover:-translate-y-2 transition duration-300">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-2 text-white">Funnel Architecture</h3>
                <p className="text-white/60 text-sm">Conversion systems designed to turn cold traffic into qualified opportunities.</p>
              </div>
              <div className="glass-card p-8 hover:-translate-y-2 transition duration-300">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-2 text-white">Revenue Operations</h3>
                <p className="text-white/60 text-sm">CRM automation that ensures no lead is ever left behind.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section light bg-bg-light">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection delay={400}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-black text-black mb-6">Chaos vs. Engineering</h2>
                <h3 className="text-xl text-black/60 font-medium mb-6">Why random acts of marketing fail.</h3>
                <div className="prose prose-lg text-black/80 leading-relaxed">
                  <p>Most companies treat growth as a series of experiments. They launch ads, write blog posts, and hire agencies in silos. This creates a fragile system where revenue is unpredictable and dependent on luck.</p>
                  <p>We replace chaos with engineering. We build infrastructure—data attribution, CRM automation, and funnel architecture—that turns growth into a predictable mathematical output.</p>
                </div>
              </div>

              {/* Chaos vs Engineering Visual */}
              <LazyVideo
                src="/assets/chaosvsorder.mp4"
                ariaLabel="Chaos vs engineering comparison video"
                className="shadow-2xl border border-black/10 bg-black"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </LazyVideo>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section dark">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection delay={600}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">The Growth Stack</h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">The six core components of a scalable revenue engine.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceTeaser
                  key={service.id}
                  slug={`/services/${service.id}`}
                  title={service.data.title}
                  description={service.data.description}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculators Teaser (Light Section) */}
      <section className="section light py-20 bg-bg-light">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-tighter">Free Growth Tools</h2>
              <p className="text-xl text-black/60 max-w-2xl mx-auto">Benchmark your metrics against the top 1% of SaaS companies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: CAC */}
              <a href="/resources/calculators#cac-calculator" className="group block p-8 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 p-3 bg-black/5 w-fit rounded-xl group-hover:bg-[#E8C677] group-hover:text-black transition-colors">💰</div>
                <h3 className="text-xl font-bold mb-2 text-black">CAC Calculator</h3>
                <p className="text-black/60 text-sm">Calculate your true cost to acquire a customer and compare with industry benchmarks.</p>
              </a>
              {/* Card 2: LTV */}
              <a href="/resources/calculators#ltv-calculator" className="group block p-8 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 p-3 bg-black/5 w-fit rounded-xl group-hover:bg-[#E8C677] group-hover:text-black transition-colors">💎</div>
                <h3 className="text-xl font-bold mb-2 text-black">LTV Calculator</h3>
                <p className="text-black/60 text-sm">Determine your Customer Lifetime Value and LTV:CAC ratio.</p>
              </a>
              {/* Card 3: Churn */}
              <a href="/resources/calculators#churn-calculator" className="group block p-8 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 p-3 bg-black/5 w-fit rounded-xl group-hover:bg-[#E8C677] group-hover:text-black transition-colors">📉</div>
                <h3 className="text-xl font-bold mb-2 text-black">Churn Analysis</h3>
                <p className="text-black/60 text-sm">Measure customer attrition and identify retention leaks.</p>
              </a>
              {/* Card 4: ROAS */}
              <a href="/resources/calculators#break-even-calculator" className="group block p-8 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 p-3 bg-black/5 w-fit rounded-xl group-hover:bg-[#E8C677] group-hover:text-black transition-colors">⚖️</div>
                <h3 className="text-xl font-bold mb-2 text-black">Break-Even ROAS</h3>
                <p className="text-black/60 text-sm">Find the exact ad spend efficiency needed to be profitable.</p>
              </a>
              {/* Card 5: MRR Forecast */}
              <a href="/resources/calculators#mrr-forecast" className="group block p-8 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 p-3 bg-black/5 w-fit rounded-xl group-hover:bg-[#E8C677] group-hover:text-black transition-colors">📊</div>
                <h3 className="text-xl font-bold mb-2 text-black">MRR Forecast</h3>
                <p className="text-black/60 text-sm">Project recurring revenue growth over the next 12 months.</p>
              </a>
              {/* Card 6: Email ROI */}
              <a href="/resources/calculators#email-roi-calculator" className="group block p-8 bg-white border border-black/5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 p-3 bg-black/5 w-fit rounded-xl group-hover:bg-[#E8C677] group-hover:text-black transition-colors">📧</div>
                <h3 className="text-xl font-bold mb-2 text-black">Email ROI</h3>
                <p className="text-black/60 text-sm">Measure the profitability of your CRM and email automation.</p>
              </a>
            </div>
            <div className="text-center mt-12">
              <a href="/resources/calculators" className="inline-flex items-center gap-2 font-bold hover:text-[#E8C677] transition relative group">
                View All Calculators
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E8C677] group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section dark py-32">
        <div className="container text-center">
          <h2 className="mb-12">
            <span className="text-5xl font-black gradient-text tracking-tighter">Get Your Growth Audit</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-16 max-w-3xl mx-auto">
            Answer 5 quick questions. We'll map your biggest scaling bottleneck and show you how to fix it.
          </p>
          <div className="max-w-5xl mx-auto">
            <ScalingSurvey />
          </div>
        </div>
      </section>

      <section className="section light bg-bg-light">
        <CTA />
      </section>
    </div>
  );
}
