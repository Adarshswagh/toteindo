import type { Metadata } from 'next';
import SearchExperience from '../components/SearchExperience';

export const metadata: Metadata = {
  title: 'Search — Toteindo',
  description: 'Search Toteindo canvas totes, slings and pouches.',
};

export default function SearchPage() {
  return <SearchExperience />;
}
