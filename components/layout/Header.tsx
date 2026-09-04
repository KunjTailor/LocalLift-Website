'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { navigation } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const headerRef = React.useRef<HTMLElement>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-border-color/80 bg-white/95 shadow-light backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="z-50 inline-flex min-h-11 items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2"
          aria-label="LocalLift Studios home"
        >
          <span
            className="flex h-6 w-6 rotate-45 items-center justify-center rounded-sm bg-lift-blue shadow-light"
            aria-hidden="true"
          >
            <span className="h-3 w-3 border border-lift-blue bg-white" />
          </span>
          <span className="font-sans text-xl font-extrabold tracking-tight text-lift-navy">
            LocalLift
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((link) => {
            const isActive =
              link.href !== '/#faq' &&
              (pathname === link.href || (link.href !== '/' && pathname.startsWith(`${link.href}/`)));

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-pill px-3.5 py-2.5 text-sm font-bold text-slate-text outline-none transition-colors hover:bg-cloud hover:text-lift-blue focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2',
                  isActive && 'bg-soft-blue text-lift-blue',
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden min-h-11 px-5 lg:inline-flex">
            <Link href="/free-review">Get a Free Review</Link>
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-button bg-cloud text-lift-navy outline-none transition-colors hover:bg-soft-blue focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2 lg:hidden"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        hidden={!isMobileMenuOpen}
        className="border-t border-border-color bg-white px-4 py-4 shadow-card lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-[1200px] flex-col gap-1">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex min-h-11 items-center rounded-button px-4 py-3 text-base font-bold text-lift-navy outline-none transition-colors hover:bg-cloud hover:text-lift-blue focus-visible:ring-2 focus-visible:ring-lift-blue"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="mt-3 w-full">
            <Link href="/free-review" onClick={() => setIsMobileMenuOpen(false)}>
              Get a Free Review
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
