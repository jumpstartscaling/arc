import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`py-8 ${className}`}>
      <ol className="flex flex-wrap items-center gap-3 text-sm text-white/70">
        <li className="flex items-center gap-3">
          <Link href="/" className="hover:text-accent transition flex items-center gap-1">
            <Home size={14} />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight size={14} className="text-white/30" />
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            {i === items.length - 1 ? (
              <span className="text-white font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <>
                <Link href={item.url} className="hover:text-accent transition">
                  {item.name}
                </Link>
                <ChevronRight size={14} className="text-white/30" />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
