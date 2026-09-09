import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
] as const;

export function Footer() {
  return (
    <footer className="bg-lift-navy py-14 text-cloud md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg font-sans text-2xl font-extrabold tracking-tight text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-lift-navy"
            >
              LocalLift Studios
            </Link>
            <p className="mt-4 max-w-xl text-base leading-7 text-cloud/75">
              Professional websites for local businesses. The Complete Launch Package is a flat $500, and the finished site is yours.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-cloud/80 sm:flex-row sm:items-center sm:gap-5">
              <span>{siteConfig.location}</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-fit rounded-sm font-semibold text-blue-300 underline-offset-4 outline-none hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-cloud/70 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-9 items-center rounded-sm outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-cloud/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LocalLift Studios. All rights reserved.</p>
          <Link
            href="/cookie-policy"
            className="w-fit rounded-sm outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Cookie Notice
          </Link>
        </div>
      </div>
    </footer>
  );
}
