import CTA from "@/components/ui/CTA";

export const metadata = {
  title: "The One-Stop Architect | Chris Amaya",
  description: "Stop hiring freelancers. Start building an empire. The 'Unicorn Developer' who builds full-stack applications, engineers private AI systems, and automates your entire backend.",
};

export default function ArchitectPage() {
  return (
    <div className="bg-[#050505] text-white" data-palette="emerald">
      <style dangerouslySetInnerHTML={{ __html: `
        .text-architect { color: #00FF94; }
        .border-architect { border-color: rgba(0,255,148,0.3); }
        .bg-architect-dim { background-color: rgba(0,255,148,0.05); }
        .card-custom {
            background-color: #0F0F0F;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 1rem;
            padding: 2rem;
            transition: border-color 0.3s ease;
        }
        .card-custom:hover { border-color: rgba(0,255,148,0.5); }
      `}} />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block font-mono text-sm uppercase tracking-[0.2em] mb-6 px-4 py-2 rounded border border-architect bg-architect-dim text-architect">
            THE ONE-STOP ARCHITECT
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            STOP GLUING YOUR BUSINESS <br className="hidden md:block" />
            TOGETHER WITH <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B8FF]">ZAPIER AND HOPE.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12">
            I am the &quot;Unicorn&quot; Developer you&apos;ve been looking for. I build full-stack applications, engineer private AI systems, and automate your entire backend—so you can stop playing CTO and start being the CEO.
          </p>

          <CTA />
          
          <p className="font-mono text-xs text-white/50 mt-8">
            WARNING: THIS IS A TECHNICAL STRATEGY SESSION. NOT A SALES CALL.
          </p>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="py-24 bg-[#08080A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-architect tracking-[0.2em] mb-4 block">THE DIAGNOSIS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The &quot;Frankenstein&quot; Problem</h2>
              <p className="text-lg text-white/70 mb-8">
                You have product-market fit. You have revenue. But your backend is a tangled mess of disconnected tools that break every time an API updates.
              </p>

              <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 mb-8">
                <h4 className="text-red-500 font-bold mb-2">⚠ SYSTEM CRITICAL</h4>
                <p className="text-red-400/80 text-sm">
                  Your business is fragile. You are one &quot;Zapier Error&quot; away from losing leads.
                </p>
              </div>

              <ul className="space-y-4 font-mono text-sm text-white/70 text-left list-none pl-0">
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold">ERROR 404:</span> The Head (WordPress site built by a ghosted freelancer).
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold">ERROR 500:</span> The Body (A $300/mo CRM that is 10% utilized).
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold">TIMEOUT:</span> The Veins (Zapier costs scaling faster than revenue).
                </li>
              </ul>
            </div>
            
            <div className="card-custom">
              <div className="aspect-video bg-black rounded flex items-center justify-center">
                <p className="font-mono text-xs text-white/50">FIG 1.0: FRAGMENTATION VISUALIZED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase font-bold text-architect tracking-[0.2em] mb-4 block">THE ARCHITECTURE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">I Don&apos;t Just Write Code.<br/>I Engineer Outcomes.</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Most developers stay in their lane. It results in silos. I own the entire highway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-custom">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-3">1. Infrastructure</h3>
              <p className="text-white/60">Stop renting expensive SaaS. I build Sovereign Assets. Self-hosted automation, custom client portals, and Docker management.</p>
            </div>
            <div className="card-custom">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">2. Intelligence</h3>
              <p className="text-white/60">Stop manual pasting. I build Autonomous Agents. &apos;Inbox Zero&apos; auto-drafters, competitor analysis bots, and Private LLMs.</p>
            </div>
            <div className="card-custom">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">3. Revenue Physics</h3>
              <p className="text-white/60">Stop guessing. I engineer Bulletproof Tracking. Server-Side CAPI, funnel optimization, and real-time ROAS dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA heading="Ready to Build?" text="Technical Strategy Session. Where the chaos ends and engineering begins." />
    </div>
  );
}
