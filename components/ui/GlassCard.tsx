import React from "react";

interface Props {
  title?: string;
  variant?: "default" | "split" | "hero";
  subtitle?: string;
  children: React.ReactNode;
}

export default function GlassCard({ title, variant = "default", subtitle, children }: Props) {
  return (
    <section className={`py-24 ${variant === "hero" ? "bg-[#0B0B0F] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#E8C677]/20 after:to-transparent" : ""}`}>
      <div className={`container mx-auto px-6 ${variant === "split" ? "grid lg:grid-cols-12 gap-12 items-start" : ""}`}>
        {variant === "split" ? (
          <>
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              {title && <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6 leading-tight">{title}</h2>}
              {subtitle && <p className="text-xl text-white/60 font-medium leading-relaxed">{subtitle}</p>}
              <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#E8C677] to-transparent rounded-full opacity-50"></div>
            </div>
            <div className="lg:col-span-7 prose prose-invert prose-xl max-w-none">
              {children}
            </div>
          </>
        ) : variant === "hero" ? (
          <div className="max-w-5xl mx-auto text-center py-12">
            {title && <h2 className="text-5xl md:text-7xl font-black gradient-text mb-8 leading-[0.9] tracking-tighter">{title}</h2>}
            <div className="prose prose-invert prose-2xl mx-auto text-white/90 max-w-none">
              {children}
            </div>
          </div>
        ) : (
          <div className="glass-card p-12 md:p-16 max-w-5xl mx-auto border-white/5 bg-white/[0.02]">
            {title && <h2 className="text-3xl md:text-4xl font-black gradient-text mb-12">{title}</h2>}
            <div className="prose prose-invert prose-lg max-w-none">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
