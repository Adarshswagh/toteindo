'use client';

import { StoreProvider } from '../lib/store';
import CustomCursor from './CustomCursor';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <CustomCursor />
      {children}
    </StoreProvider>
  );
}
