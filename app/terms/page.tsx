import { PageHero } from '@/components/sections/PageHero';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig, websiteOffer } from '@/lib/site';

export const metadata = createPageMetadata({
  title: `Terms of Service | ${siteConfig.name}`,
  description:
    "Review LocalLift Studios' $500 one-time website-build terms, including scope, revisions, payment, ownership, and third-party costs.",
  path: '/terms',
});

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The standard terms for LocalLift Studios website projects and use of this website."
      />

      <article className="mx-auto max-w-[840px] px-4 py-16 text-slate-text md:py-24">
        <div className="rounded-[24px] border border-border-color bg-white p-6 shadow-light sm:p-8 md:p-12">
          <p className="mb-10 text-sm font-semibold text-lift-navy">
            Last updated: September 2, 2026
          </p>

          <p className="leading-7">
            These Terms of Service (&quot;Terms&quot;) apply to use of {siteConfig.url}{' '}
            and to standard website projects provided by {siteConfig.name}{' '}
            (&quot;LocalLift,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). A proposal,
            statement of work, invoice, or other project agreement accepted in writing
            may add to or modify these Terms. If they conflict, the project-specific
            agreement controls.
          </p>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">1. Standard website service</h2>
            <p className="leading-7">
              Our standard service is a {websiteOffer.priceLabel} one-time website build.
              It includes up to five core pages, custom professional and mobile-responsive
              design, a contact or quote form, click-to-call functionality, basic local
              and on-page SEO setup, domain connection during launch, two reasonable
              revision rounds, and final launch and handoff. Exact pages, features, and
              deliverables are confirmed in writing for each project.
            </p>
            <p className="leading-7">
              The standard build does not require a LocalLift subscription or monthly
              LocalLift maintenance fee.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">2. Work outside the standard scope</h2>
            <p className="leading-7">
              Significantly more than five pages, e-commerce, advanced booking systems,
              custom applications, databases, memberships, complex integrations, and
              other substantial custom functionality require a separate written quote.
              Requests that materially change an approved scope may affect price and
              timing and will not begin until agreed in writing.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">3. Client responsibilities</h2>
            <p className="leading-7">
              You are responsible for providing accurate business information, service
              descriptions, contact details, branding, feedback, account access, and
              photos or other materials needed for the project. You must have permission
              to use all content and assets you provide. Delays in receiving required
              information, access, or feedback may extend the project timeline.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">4. Timing and revisions</h2>
            <p className="leading-7">
              Most standard projects are targeted for completion within approximately
              two to four weeks after we receive the content, photos, branding, access,
              and business information needed to start. This is a target, not a guaranteed
              completion date. Two reasonable revision rounds are included before final
              handoff. New pages, a changed direction, or substantial new functionality
              is additional scope.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">5. Payment</h2>
            <p className="leading-7">
              The standard project fee is {websiteOffer.priceLabel}. Payment timing is
              stated in the applicable proposal or invoice. Unless we agree otherwise in
              writing, the full project balance must be paid before final launch or handoff.
              Taxes, if legally required, are additional.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">6. Third-party costs and services</h2>
            <p className="leading-7">
              You are responsible for domain registration and renewal, paid hosting,
              premium themes or plugins, software subscriptions, transaction fees, and
              other third-party services associated with the website unless a written
              project agreement explicitly says otherwise. We can help connect or
              configure agreed services during launch, but third-party products remain
              subject to their own pricing, availability, licenses, security, and terms.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">7. Ownership and handoff</h2>
            <p className="leading-7">
              After the project is completed and the final balance is paid, we provide
              the finished website and the files or access specified in the agreed handoff
              method. You retain ownership of content and assets you supplied and receive
              control of the completed website deliverables created for your project.
              LocalLift does not require an ongoing subscription after handoff.
            </p>
            <p className="leading-7">
              Third-party software, fonts, themes, plugins, stock assets, open-source code,
              and hosting platforms remain subject to their original licenses. Our
              pre-existing tools, reusable components, workflows, and general know-how
              are not transferred, although their inclusion will not prevent you from
              using the delivered website as agreed.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">8. Cancellation and refunds</h2>
            <p className="leading-7">
              A cancellation request must be made in writing. The accepted proposal,
              invoice, or other project agreement will state the cancellation and refund
              terms for that project. This page does not create a universal cancellation
              window or promise that a refund will or will not be available. Any amount due
              or refundable depends on the accepted agreement, project status, work
              performed, third-party commitments, and applicable law. We will confirm the
              project status, available deliverables, and account balance in writing.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">9. Portfolio use</h2>
            <p className="leading-7">
              Unless we agree otherwise in writing, LocalLift may identify the business
              and display the public finished website or screenshots as examples of our
              work. We will not knowingly publish credentials, private drafts, or other
              confidential information as portfolio material.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">10. No results guarantee</h2>
            <p className="leading-7">
              Basic SEO setup helps search engines understand a website, but LocalLift does
              not guarantee search rankings, traffic, inquiries, leads, revenue, or other
              business results. Results depend on many factors outside our control,
              including competition, content, reputation, advertising, and search-engine
              changes.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">11. Website and third-party links</h2>
            <p className="leading-7">
              Website information is provided for general informational purposes and may
              change. External links are provided for convenience; LocalLift does not
              control external sites or their availability, content, privacy practices,
              or terms.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-lift-navy">12. Changes to these Terms</h2>
            <p className="leading-7">
              We may update these website Terms to reflect changes in our standard service
              or practices. Changes do not replace the terms of an already accepted
              project agreement unless both sides agree in writing.
            </p>
          </section>

          <section className="mt-10 rounded-card bg-cloud p-6">
            <h2 className="text-xl font-bold text-lift-navy">Contact</h2>
            <p className="mt-3 leading-7">
              Questions about these Terms can be sent to{' '}
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
