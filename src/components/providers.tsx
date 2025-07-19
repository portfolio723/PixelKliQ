'use client';

import { ThemeProvider } from 'next-themes';
import { SmoothCursor } from '@/components/magicui/smooth-cursor';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothCursor />
      {children}
    </ThemeProvider>
  );
}
