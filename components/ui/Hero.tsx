import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  subtitle?: string;
  variant?: "full" | "compact";
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, variant = "full", children }: Props) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] font-black mb-8 tracking-tighter">
          <span className="gradient-text" dangerouslySetInnerHTML={{ __html: title }} />
        </h1>

        {subtitle && (
          <p className="font-mono text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {children ? (
            children
          ) : (
            <>
              <Link
                href="/audit"
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                Start Audit
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 border border-[#E8C677]/30 text-[#E8C677] font-bold rounded-xl hover:bg-[#E8C677]/10 transition"
              >
                Explore Systems
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-deep)] to-transparent pointer-events-none"></div>
    </section>
  );
}
