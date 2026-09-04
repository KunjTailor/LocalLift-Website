import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-lift-navy md:text-5xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-7 text-slate-text md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
