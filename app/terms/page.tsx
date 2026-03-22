import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | Jumpstart Scaling",
  description: "Jumpstart Scaling terms of service governing your use of our website and services.",
};

const crumbs = [{ name: 'Terms of Service', url: '/terms' }];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Breadcrumbs items={crumbs} />
        
        <article className="prose prose-invert prose-gold max-w-none pt-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Terms of Service</h1>
          <p className="text-white/60 mb-12">
            <strong>Effective Date:</strong> February 1, 2026<br/>
            <strong>Last Updated:</strong> February 1, 2026
          </p>
          
          <div className="space-y-12 text-white/80 leading-relaxed">
            <section>
              <p>These Terms of Service (&quot;Terms&quot;) govern your use of jumpstartscaling.com and the services provided by Jumpstart Scaling (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By accessing our website or using our services you agree to be bound by these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
              <p>Jumpstart Scaling provides growth engineering services including paid acquisition management, funnel architecture, CRM transformation, data attribution, authority building, and comprehensive growth retainer packages. Specific service deliverables, timelines, and fees are defined in individual service agreements executed between you and Jumpstart Scaling.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use of Website</h2>
              <p>You may use our website for lawful purposes only. You agree not to use our website in any way that violates applicable law, infringes on intellectual property rights, transmits malicious code, or attempts to gain unauthorized access to our systems. We reserve the right to restrict or terminate access for violations of these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p>All content on jumpstartscaling.com including text, graphics, logos, images, and software is the property of Jumpstart Scaling and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Client Work Product</h2>
              <p>For services performed under a service agreement, ownership of work product will be defined in the applicable agreement. Unless otherwise specified, upon full payment you will own deliverables created specifically for your business. We retain the right to use general methodologies, frameworks, and anonymized learnings from our work.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>To the maximum extent permitted by law Jumpstart Scaling shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability for any claim arising under these Terms shall not exceed the amount you paid us in the twelve months preceding the claim.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <p>Our website and content are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components. Results described in case studies and testimonials are specific to those clients and should not be interpreted as guarantees of future performance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p>You agree to indemnify and hold harmless Jumpstart Scaling, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our website or violation of these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p>These Terms are governed by the laws of the state in which Jumpstart Scaling is organized, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved through binding arbitration.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to this page. Your continued use of our website after changes constitutes acceptance of the modified Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>Questions about these Terms should be directed to <strong>chris@jumpstartscaling.com</strong>.</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
