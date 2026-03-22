import React from 'react';

interface BentoItemProps {
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
}

export const BentoItem = ({ title, description, className = '', icon }: BentoItemProps) => {
  return (
    <div className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group ${className}`}>
      {icon && <div className="mb-4 text-[#FFE5A0]">{icon}</div>}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFE5A0] transition-colors">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
};

export default function BentoGrid({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
}
