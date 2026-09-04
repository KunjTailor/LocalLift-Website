import { PageHero } from '@/components/sections/PageHero';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: `Cookie Notice | ${siteConfig.name}`,
  description:
    'Learn about the limited site technologies and third-party links used on the LocalLift Studios website.',
  path: '/cookie-policy',
});

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="Legal"
        title="Cookie Notice"
        description="A plain-language explanation of cookies and third-party services on this website."
      />

      <article className="mx-auto max-w-[840px] px-4 py-16 text-slate-text md:py-24">
        <div className="rounded-[24px] border border-border-color bg-white p-6 shadow-light sm:p-8 md:p-12">
          <p className="mb-10 text-sm font-semibold text-lift-navy">
            Last updated: September 2, 2026
          </p>

          <p className="leading-7">
            This notice explains the limited use of cookies and related technologies on
            {` ${siteConfig.url}`}.
          </p>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">No analytics or advertising cookies</h2>
            <p className="leading-7">
              LocalLift does not currently place analytics, advertising, or marketing
              cookies on this public website. The site does not use cookies to build
              advertising profiles or track visitors across unrelated websites.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">Essential site technology</h2>
            <p className="leading-7">
              The public pages do not require an account or sign-in. Our hosting and
              infrastructure providers may use strictly necessary technical mechanisms
              to deliver requests, maintain security, and prevent abuse. Those providers
              may also process limited technical request data as described in our Privacy
              Policy.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">Third-party services and links</h2>
            <p className="leading-7">
              Our inquiry form is delivered to us through Resend. The website also links
              to Calendly, portfolio demonstrations, and other external websites. When
              you follow an external link, that provider may use cookies under its own
              policies. LocalLift does not control cookies placed on another website.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">Browser controls</h2>
            <p className="leading-7">
              Most browsers let you view, block, or delete cookies through their settings.
              Blocking cookies on third-party services may affect features offered by
              those services.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">Changes to this notice</h2>
            <p className="leading-7">
              We will update this notice if we add analytics, advertising tools, or other
              technologies that materially change these practices. The date above
              identifies the latest published version.
            </p>
          </section>

          <section className="mt-10 rounded-card bg-cloud p-6">
            <h2 className="text-xl font-bold text-lift-navy">Contact us</h2>
            <p className="mt-3 leading-7">
              Questions about this notice can be sent to{' '}
              <a className="font-semibold text-lift-blue underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
