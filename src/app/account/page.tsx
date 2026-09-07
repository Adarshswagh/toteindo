import type { Metadata } from 'next';
import AccountExperience from '../components/AccountExperience';

export const metadata: Metadata = {
  title: 'Profile — Toteindo',
  description: 'Sign in to your Toteindo account or create one.',
};

export default function AccountPage() {
  return <AccountExperience />;
}
