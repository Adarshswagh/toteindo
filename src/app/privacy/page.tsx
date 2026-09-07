import type { Metadata } from 'next';
import ContentPage from '../components/ContentPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Toteindo',
  description: 'How Toteindo collects and uses your information.',
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy"
      accent="policy."
      blocks={[
        {
          heading: 'What we collect',
          body: 'Name, email, phone and delivery details when you order, subscribe or send an enquiry.',
        },
        {
          heading: 'How we use it',
          body: 'To fulfil orders, reply to you, and share collection notes if you opt in. We do not sell your data.',
        },
        {
          heading: 'Questions',
          body: 'Write to hello@toteindo.com if you want a copy of your data or want it removed.',
        },
      ]}
    />
  );
}
