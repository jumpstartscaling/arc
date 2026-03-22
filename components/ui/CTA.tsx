import Link from "next/link";

interface Props {
  heading?: string;
  text?: string;
  href?: string;
  label?: string;
}

export default function CTA({
  heading = "Ready to Scale Predictably?",
  text = "Book a strategy call — we'll audit your current setup and map your path to domination.",
  href = "/audit",
  label = "Start Your Moat Audit",
}: Props) {
  return (
    <section className="py-16 px-6 text-center">
      <div className="glass-card max-w-[700px] mx-auto p-12 md:p-16">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold mb-4">
          <span className="gradient-text">{heading}</span>
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">{text}</p>
        <Link
          href={href}
          className="inline-block px-10 py-4 bg-gradient-to-br from-[#FFE5A0] via-[#E8C677] to-[#D4B062] text-[#050505] font-bold text-lg rounded-xl transition-transform hover:scale-105 shadow-[0_8px_24px_rgba(201,169,97,0.3)]"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
