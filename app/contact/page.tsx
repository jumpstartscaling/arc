import Hero from "@/components/ui/Hero";
import ScalingSurvey from "@/components/interactivity/ScalingSurvey";
import CTA from "@/components/ui/CTA";
import ContactForm from "@/components/interactivity/ContactForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Script from "next/script";

export const metadata = {
  title: "Contact Jumpstart Scaling",
  description: "Get in touch with our growth engineering team. Book a strategy call or reach out directly.",
};

const crumbs = [{ name: 'Contact', url: '/contact' }];
const calendlyUrl = "https://calendly.com/jumpstartscaling/30min";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <Breadcrumbs items={crumbs} />
      </div>

      <Hero title="Let's Build Your Moat" subtitle="Schedule a call or send a message" variant="full" />

      <section className="section dark">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 gradient-text">Book a Strategy Call</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                The best way to explore working together is a 30-minute strategy call. We'll review your current setup and map potential paths forward.
              </p>
              
              <div className="glass-card p-0 overflow-hidden" style={{ minHeight: '630px' }}>
                <div className="calendly-inline-widget" data-url={calendlyUrl} style={{ minWidth: '320px', height: '630px' }}></div>
                <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 gradient-text">Direct Contact</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                For general inquiries or to start a conversation.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section light bg-bg-light py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-8 text-black tracking-tighter">Not ready to chat? Take the audit.</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <ScalingSurvey />
          </div>
        </div>
      </section>

      <section className="section dark">
        <CTA 
          heading="Ready to Scale?" 
          text="Join the high-growth companies building with Jumpstart." 
        />
      </section>
    </div>
  );
}
