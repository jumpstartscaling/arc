import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Jumpstart Scaling",
  description: "Jumpstart Scaling privacy policy covering data collection, usage, tracking, and your rights.",
};

const crumbs = [{ name: 'Privacy Policy', url: '/privacy' }];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Breadcrumbs items={crumbs} />
        
        <article className="prose prose-invert prose-gold max-w-none pt-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Privacy Policy</h1>
          <p className="text-white/60 mb-12">
            <strong>Effective Date:</strong> February 1, 2026<br/>
            <strong>Last Updated:</strong> February 1, 2026
          </p>
          
          <div className="space-y-12 text-white/80 leading-relaxed">
            <section>
              <p>Jumpstart Scaling (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates jumpstartscaling.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p><strong>Personal Information:</strong> When you fill out forms on our website, request an audit, or contact us, we may collect your name, email address, phone number, company name, and any other information you voluntarily provide.</p>
              <p><strong>Usage Data:</strong> We automatically collect information about your device, browser, IP address, pages visited, time spent on pages, referring URLs, and other diagnostic data through server logs and analytics tools.</p>
              <p><strong>Cookies and Tracking:</strong> We use cookies, pixels, and similar technologies from Google Analytics, Meta (Facebook), TikTok, Pinterest, and X (Twitter) to understand website traffic, measure advertising effectiveness, and deliver relevant advertising. These third parties may collect information about your online activities over time and across different websites.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p>We use collected information to provide and maintain our services, respond to inquiries and provide customer support, send communications about our services with your consent, analyze website usage and improve our content and user experience, deliver targeted advertising through third-party platforms, comply with legal obligations, and protect against fraudulent or unauthorized activity.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing</h2>
              <p>We do not sell your personal information. We may share your information with analytics and advertising partners as described above, service providers who assist in operating our website and delivering our services, and law enforcement or regulatory authorities when required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p>We retain personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p>Depending on your location you may have the right to access, correct, or delete your personal information, opt out of targeted advertising, request a copy of the data we hold about you, and withdraw consent where processing is based on consent. To exercise any of these rights contact us at <strong>chris@jumpstartscaling.com</strong>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">California Residents</h2>
              <p>Under the California Consumer Privacy Act (CCPA) California residents have additional rights including the right to know what personal information is collected, the right to delete personal information, the right to opt out of the sale of personal information (we do not sell personal information), and the right to non-discrimination for exercising privacy rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
              <p>We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However no method of transmission over the Internet or electronic storage is completely secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The updated version will be indicated by the &quot;Last Updated&quot; date above. We encourage you to review this policy periodically.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>Questions about this Privacy Policy should be directed to <strong>chris@jumpstartscaling.com</strong>.</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
