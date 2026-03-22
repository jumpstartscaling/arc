import Link from "next/link";

const JUMPSTART_URL = "https://jumpstartscaling.com";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative z-10 pt-32 pb-12 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href={JUMPSTART_URL} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#E8C677] rounded flex items-center justify-center text-black font-black">
                JS
              </div>
              <span className="font-bold text-xl text-white">
                Jumpstart<span className="text-[#E8C677]">Scaling</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Growth engineering for companies serious about predictable revenue.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E8C677] mb-8">Capabilities</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link href={`${JUMPSTART_URL}/services/paid-acquisition`} className="hover:text-white transition">
                  Paid Acquisition
                </Link>
              </li>
              <li>
                <Link href={`${JUMPSTART_URL}/services/funnel-architecture`} className="hover:text-white transition">
                  Funnel Architecture
                </Link>
              </li>
              <li>
                <Link href={`${JUMPSTART_URL}/services/crm-transformation`} className="hover:text-white transition">
                  CRM Transformation
                </Link>
              </li>
              <li>
                <Link href={`${JUMPSTART_URL}/services/growth-retainer`} className="hover:text-white transition">
                  Growth Retainer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E8C677] mb-8">Resources</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link href={`${JUMPSTART_URL}/tools`} className="hover:text-white transition">
                  Tools
                </Link>
              </li>
              <li>
                <Link href={`${JUMPSTART_URL}/intel`} className="hover:text-white transition">
                  Intel & Insights
                </Link>
              </li>
              <li>
                <Link href={`${JUMPSTART_URL}/audit`} className="hover:text-white transition">
                  Moat Audit
                </Link>
              </li>
              <li>
                <Link href={`${JUMPSTART_URL}/resources/calculators`} className="hover:text-white transition">
                  ROI Calculators
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E8C677] mb-8">Direct</h3>
            <a href="mailto:hello@jumpstartscaling.com" className="text-white hover:text-[#E8C677] transition-colors font-medium">
              hello@jumpstartscaling.com
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-xs">&copy; {currentYear} Jumpstart Scaling. All rights reserved.</p>
          <div className="flex gap-8 text-white/50 text-xs">
            <Link href={`${JUMPSTART_URL}/terms`} className="hover:text-white transition">
              Terms
            </Link>
            <Link href={`${JUMPSTART_URL}/privacy`} className="hover:text-white transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
