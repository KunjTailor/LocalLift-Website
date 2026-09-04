import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { portfolioProjects } from '@/lib/site';
import { cn } from '@/lib/utils';

interface ProjectGridProps {
  detailed?: boolean;
}

export function ProjectGrid({ detailed = false }: ProjectGridProps) {
  return (
    <div className={cn(detailed ? 'space-y-16 md:space-y-24' : 'grid gap-8 md:grid-cols-2 lg:grid-cols-3')}>
      {portfolioProjects.map((project, index) => (
        <article
          key={project.title}
          className={cn(
            detailed &&
              `grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`,
          )}
        >
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View the ${project.title} concept website in a new tab`}
            className="group block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-4"
          >
            <div className="overflow-hidden rounded-card border border-border-color bg-white shadow-light transition-all duration-300 group-hover:-translate-y-1 group-hover:border-lift-blue/35 group-hover:shadow-card">
              <div className="flex h-8 items-center border-b border-border-color bg-cloud px-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <span className="ml-3 truncate font-mono text-[10px] text-slate-text/70">
                  {project.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </span>
              </div>
              <div className={cn('relative overflow-hidden bg-slate-100', detailed ? 'aspect-[4/3]' : 'aspect-[4/3]')}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes={
                    detailed
                      ? '(max-width: 1023px) 100vw, 50vw'
                      : '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw'
                  }
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-pill bg-white/95 px-3 py-1.5 text-xs font-bold text-lift-navy opacity-0 shadow-sm transition-all group-hover:opacity-100 group-focus-visible:opacity-100">
                  View concept <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>

          <div className={cn(detailed ? 'space-y-5' : 'mt-5')}>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge>{project.label}</Badge>
              <span className="text-sm font-bold text-lift-blue">{project.category}</span>
            </div>
            <h3 className={cn('font-bold text-lift-navy', detailed ? 'text-3xl' : 'text-xl md:text-2xl')}>
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-text md:text-base">{project.brief}</p>
            {detailed ? (
              <div className="rounded-card border border-border-color bg-white p-5 shadow-light">
                <p className="mb-3 text-xs font-bold tracking-[0.12em] text-muted-slate uppercase">
                  What this concept demonstrates
                </p>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm font-medium text-slate-text">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
