import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-button font-body text-[15px] font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-lift-blue text-white shadow-light hover:bg-lift-blue-hover hover:-translate-y-[1px] hover:shadow-hover duration-175 ease-out': variant === 'primary',
            'bg-white text-lift-navy border border-border-color shadow-light hover:bg-cloud hover:-translate-y-[1px] hover:border-muted-slate duration-175 ease-out': variant === 'secondary',
            'border border-lift-navy bg-transparent text-lift-navy hover:bg-cloud duration-175': variant === 'outline',
            'hover:bg-cloud hover:text-lift-blue duration-175': variant === 'ghost',
            'text-lift-blue underline-offset-4 hover:underline duration-175': variant === 'link',
            
            'h-12 px-6 py-2': size === 'default',
            'h-9 rounded-button px-3': size === 'sm',
            'h-14 rounded-button px-8 text-base': size === 'lg',
            'h-12 w-12': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
