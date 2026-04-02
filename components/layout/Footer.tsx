import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-lift-navy text-cloud py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                LocalLift
              </span>
            </Link>
            <p className="text-muted-slate text-sm max-w-sm">
              Affordable websites for local businesses that need more trust online. We build clean, mobile-friendly websites and keep them updated monthly.
            </p>
            <div className="pt-2 flex flex-col space-y-1 text-sm text-cloud">
              <span>Austin, TX</span>
              <a href="mailto:hello@locallift.local" className="text-lift-blue hover:text-white transition-colors underline-offset-4 hover:underline">
                hello@locallift.local
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-muted-slate">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-lg">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-slate">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Notice</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-text/30 flex flex-col md:flex-row justify-between items-center text-xs text-muted-slate">
          <p>© {new Date().getFullYear()} LocalLift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
