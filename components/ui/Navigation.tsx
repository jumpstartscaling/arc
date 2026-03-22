"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Paid Acquisition", href: "/services/paid-acquisition", desc: "Scale ad spend profitably" },
  { name: "Funnel Architecture", href: "/services/funnel-architecture", desc: "Optimize conversion rates" },
  { name: "CRM Transformation", href: "/services/crm-transformation", desc: "Automate sales ops" },
  { name: "Authority Engine", href: "/services/authority-engine", desc: "Establish market dominance" },
];

const resources = [
  { name: "Tools", href: "/tools", desc: "News-inspired calculators" },
  { name: "Calculators", href: "/resources/calculators", desc: "8+ Growth Tools" },
  { name: "Market Intel", href: "/intel", desc: "Deep dive strategy" },
  { name: "Full Audit", href: "/audit", desc: "Free comprehensive analysis" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const progress = document.getElementById('scroll-progress');
      if (progress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 border-b ${
          isScrolled ? "bg-[#0B0B0F]/90 backdrop-blur-md border-white/10 shadow-2xl" : "bg-[#0B0B0F] border-white/5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Jumpstart Scaling homepage" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C9A961] to-[#FFE5A0] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(201,169,97,0.3)] group-hover:shadow-[0_0_25px_rgba(201,169,97,0.5)] transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5">
                <path d="M13 2L3 14h9v8l10-12h-9l9-8z"></path>
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
              Jumpstart<span className="text-[#FFE5A0]">Scaling</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-sm text-white/90">
            {/* Services Dropdown */}
            <li className="relative group">
              <button className="hover:text-[#E8C677] transition flex items-center gap-1 py-4 cursor-pointer">
                Services <span className="text-[10px] opacity-70 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className="absolute top-[calc(100%-0.5rem)] left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-72 pointer-events-none group-hover:pointer-events-auto">
                <ul className="bg-[#0A0A0A] border border-white/10 rounded-xl p-2 shadow-2xl ring-1 ring-white/5">
                  {services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-3 px-4 rounded-lg hover:bg-[#E8C677]/10 transition group/item"
                      >
                        <div className="text-white/90 font-bold group-hover/item:text-[#E8C677] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-white/50">{item.desc}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Resources Dropdown */}
            <li className="relative group">
              <button className="hover:text-[#E8C677] transition flex items-center gap-1 py-4 cursor-pointer">
                Resources <span className="text-[10px] opacity-70 group-hover:rotate-180 transition-transform">▼</span>
              </button>
              <div className="absolute top-[calc(100%-0.5rem)] left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64 pointer-events-none group-hover:pointer-events-auto">
                <ul className="bg-[#0A0A0A] border border-white/10 rounded-xl p-2 shadow-2xl ring-1 ring-white/5">
                  <li className="px-4 py-2 text-[10px] uppercase tracking-widest text-[#E8C677]/70 font-mono">
                    Growth Tools
                  </li>
                  {resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-2 px-4 rounded-lg hover:bg-[#E8C677]/10 hover:text-[#E8C677] transition text-white/80"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link href="/intel" className="hover:text-[#E8C677] transition block py-4">
                Intel
              </Link>
            </li>

            <li>
              <Link
                href="/audit"
                className="px-6 py-2.5 bg-[#E8C677] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white transition shadow-[0_0_20px_rgba(232,198,119,0.4)] hover:shadow-white/50"
              >
                Get Audit
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden z-[60] relative w-12 h-12 flex flex-col justify-center items-center gap-1.5"
          >
            <span
              className={`w-8 h-0.5 bg-white transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-0.5 bg-white transition-all duration-300 origin-center ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-0.5 bg-white transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0B0B0F]/99 backdrop-blur-3xl z-50 h-[100dvh] lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-8 pt-24 pb-12">
              <ul className="space-y-8">
                <li>
                  <Link href="/" className="text-3xl font-bold text-white hover:text-[#E8C677] transition">
                    Home
                  </Link>
                </li>

                <li className="space-y-4">
                  <span className="text-[#E8C677] text-sm font-mono uppercase tracking-widest border-b border-[#E8C677]/30 pb-2 block">
                    Services
                  </span>
                  <ul className="space-y-2">
                    {services.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="block text-xl text-white/80 hover:text-[#E8C677] transition py-2">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="space-y-4">
                  <span className="text-[#E8C677] text-sm font-mono uppercase tracking-widest border-b border-[#E8C677]/30 pb-2 block">
                    Tools & Intel
                  </span>
                  <ul className="space-y-2">
                    {resources.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="block text-xl text-white/80 hover:text-[#E8C677] transition py-1">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-8 pt-8 border-t border-white/10">
                  <Link
                    href="/audit"
                    className="block w-full text-center py-4 bg-[#E8C677] text-black font-bold text-xl rounded-xl shadow-[0_0_30px_rgba(232,198,119,0.3)]"
                  >
                    Start Free Audit
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
