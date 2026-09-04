import { PageHero } from '@/components/sections/PageHero';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    'Learn how LocalLift Studios handles information submitted through our inquiry form and third-party scheduling links.',
  path: '/privacy',
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and share information when you contact LocalLift Studios."
      />

      <article className="mx-auto max-w-[840px] px-4 py-16 text-slate-text md:py-24">
        <div className="rounded-[24px] border border-border-color bg-white p-6 shadow-light sm:p-8 md:p-12">
          <p className="mb-10 text-sm font-semibold text-lift-navy">
            Last updated: September 2, 2026
          </p>

          <div className="space-y-5 leading-7">
            <p>
              LocalLift Studios (&quot;LocalLift,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) respects your privacy. This policy explains how we handle
              information collected through {siteConfig.url} and when you contact us
              about a website review or project.
            </p>
          </div>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">1. Information we collect</h2>
            <p className="leading-7">
              Our inquiry form may collect your name, business name, email address,
              optional phone number, optional current website URL, type of business,
              inquiry type, preferred contact method, and the message you choose to
              provide. We also receive information you send directly by email or during
              project conversations.
            </p>
            <p className="leading-7">
              Our hosting and infrastructure providers may process limited technical
              information, such as an IP address, browser or device information, request
              times, and security logs, to deliver and protect the website.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">2. How we use information</h2>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>Respond to inquiries and provide a requested website review.</li>
              <li>Evaluate, plan, deliver, and support an agreed website project.</li>
              <li>Communicate about project details, scheduling, payment, and handoff.</li>
              <li>Operate, secure, troubleshoot, and improve our website and services.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">3. Service providers and links</h2>
            <p className="leading-7">
              Form submissions are routed through Resend, our transactional email
              provider, so they can be delivered to our team. We may also use hosting,
              email, and other service providers that process information only as needed
              to provide their services to us. We do not sell personal information.
            </p>
            <p className="leading-7">
              If you choose a Calendly scheduling link or another external link, you are
              visiting a third-party service. Information you provide there is handled
              under that provider&apos;s own privacy terms.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">4. Retention and security</h2>
            <p className="leading-7">
              We retain inquiry and project information only as long as reasonably
              needed to respond, provide services, maintain business records, resolve
              disputes, and meet legal obligations. We use reasonable safeguards, but no
              method of transmission or storage can be guaranteed completely secure.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">5. Your choices</h2>
            <p className="leading-7">
              You may ask us to correct or delete information you submitted, subject to
              records we must retain for legitimate business or legal reasons. This site
              is intended for businesses and is not directed to children under 13.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">6. Policy updates</h2>
            <p className="leading-7">
              We may update this policy when our website or practices change. The date
              above identifies the latest published version.
            </p>
          </section>

          <section className="mt-10 rounded-card bg-cloud p-6">
            <h2 className="text-xl font-bold text-lift-navy">Contact us</h2>
            <p className="mt-3 leading-7">
              Questions or privacy requests can be sent to{' '}
              <a className="font-semibold text-lift-blue underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              . LocalLift Studios is based in {siteConfig.location}.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
