import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact — Toteindo',
  description: 'Write to Toteindo for orders, bulk enquiries and support.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love"
        accent="to hear from you."
        description="Questions about an order, a collection, or a bulk project — send a note."
        image="/images/lifestyle/editorial.jpg"
      />
      <section className="section-padding bg-[#F7F3EC]">
        <div className="site-wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="section-kicker">
              <span className="gold-divider" />
              <span className="eyebrow">Reach Us</span>
            </div>
            <h2 className="display-title mb-5 text-[#1D1F1F]" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
              Hello from Toteindo.
            </h2>
            <p className="section-copy mb-6">
              Email us at{' '}
              <a href="mailto:hello@toteindo.com" className="text-[#7E1323]">
                hello@toteindo.com
              </a>{' '}
              or use the form. For WhatsApp, tap the link in the footer.
            </p>
            <p className="section-copy">Made in India. Replies on working days.</p>
          </div>
          <EnquiryForm submitLabel="Send Message" />
        </div>
      </section>
    </>
  );
}
