import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Source_Code_Pro } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontCode = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
});

export const metadata: Metadata = {
  title: 'PixelKliQ',
  description: 'PixelKliQ offers cutting-edge digital solutions in Hyderabad, from creative design to tech development. Partner with us to elevate your brand.',
  icons: {
    icon: 'https://miro.medium.com/v2/resize:fit:356/format:webp/1*k-cMgo-BIeSv46lXogrEPQ.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={cn("font-body antialiased", fontBody.variable, fontCode.variable)}>
        <Providers>
            {children}
            <Toaster />
        </Providers>
      </body>
    </html>
  );
}
