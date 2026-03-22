import Link from "next/link";

interface Props {
  title: string;
  description: string;
  slug: string;
  metrics?: { label: string; value: string }[];
}

export default function ServiceTeaser({ title, description, slug, metrics }: Props) {
  return (
    <Link href={slug} className="glass-card p-10 group block relative animate-on-scroll">
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E8C677] transition-colors">{title}</h3>
      <p className="text-white/60 text-sm mb-8 leading-relaxed">{description}</p>
      
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {metrics.map((m, i) => (
            <div key={i}>
              <span className="block text-2xl font-bold text-[#E8C677]">{m.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">{m.label}</span>
            </div>
          ))}
        </div>
      )}
      
      <span className="absolute bottom-8 right-8 text-[#E8C677] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-xl">
        →
      </span>
    </Link>
  );
}
