'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle Scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close mobile menu
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-border-color py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] flex items-center justify-between relative" ref={menuRef}>
        <Link href="/" className="flex items-center space-x-2 z-50">
          {/* Logo motif */}
          <div className="w-6 h-6 rounded-sm bg-lift-blue flex items-center justify-center transform rotate-45">
            <div className="w-3 h-3 bg-white border border-lift-blue" />
          </div>
          <span className="font-sans font-extrabold text-xl text-lift-navy tracking-tight">
            LocalLift
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-bold text-slate-text hover:bg-cloud hover:text-lift-blue px-4 py-2 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          {/* Desktop CTA */}
          <Button asChild size="sm" className="hidden lg:flex">
            <Link href="/free-review">Get a Free Review</Link>
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-full bg-cloud text-lift-navy hover:bg-cloud/80 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div animate={isMobileMenuOpen ? "open" : "closed"}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>

        {/* Professional Mobile Popover Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} // Spring-like ease out
              className="absolute top-14 right-4 w-[240px] bg-white rounded-[16px] shadow-card border border-border-color p-2 lg:hidden flex flex-col z-40 overflow-hidden"
            >
              <div className="flex flex-col space-y-0.5">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-full text-left px-4 py-3 text-[15px] font-semibold text-lift-navy hover:bg-cloud rounded-[10px] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-border-color w-full my-2" />
              
              <div className="px-2 pb-2 pt-1">
                <Button asChild size="sm" className="w-full justify-center">
                  <Link href="/free-review">Get a Free Review</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
