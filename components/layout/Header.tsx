'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/animations/Reveal';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cloud/80 backdrop-blur-md border-b border-border-color py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo motif: subtle blue upward motif */}
          <div className="w-6 h-6 rounded-sm bg-lift-blue flex items-center justify-center transform rotate-45">
            <div className="w-3 h-3 bg-white border border-lift-blue" />
          </div>
          <span className="font-sans font-extrabold text-xl text-lift-navy tracking-tight">
            LocalLift
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-slate-text hover:text-lift-blue px-3 py-2 transition-colors duration-175"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <Button asChild size="sm" className="hidden lg:flex">
            <Link href="/free-review">Get a Free Website Review</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
