import { processSteps } from '@/lib/site';
import { cn } from '@/lib/utils';

interface ProcessStepsProps {
  detailed?: boolean;
}

export function ProcessSteps({ detailed = false }: ProcessStepsProps) {
  return (
    <ol className={cn('grid gap-5 md:grid-cols-2', !detailed && 'lg:grid-cols-4')}>
      {processSteps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-card border border-white/15 bg-white/10 p-6 text-white backdrop-blur-sm md:p-7"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lift-blue text-sm font-extrabold shadow-light">
              {index + 1}
            </span>
            <step.icon className="h-5 w-5 text-blue-300" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white">{step.shortTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-cloud/75">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
