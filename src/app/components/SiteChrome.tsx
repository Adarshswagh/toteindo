'use client';

import { StoreProvider } from '../lib/store';
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
}
