import { Plus } from 'lucide-react';
import type { FAQItem } from '@/lib/site';

interface FAQListProps {
  items: FAQItem[];
}

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-card border border-border-color bg-white shadow-light transition-colors open:border-lift-blue/35"
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-card px-5 py-4 text-left font-sans text-base font-bold text-lift-navy outline-none transition-colors hover:text-lift-blue focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2 sm:px-6 sm:py-5 sm:text-lg [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <Plus
              className="h-5 w-5 shrink-0 text-lift-blue transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="max-w-3xl text-sm leading-7 text-slate-text sm:text-base">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
