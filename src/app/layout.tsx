
'use client';
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from 'next-themes';
import { Inter, Source_Code_Pro } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SmoothCursor } from '@/components/magicui/smooth-cursor';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontCode = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code',
});

// Note: Metadata is not supported in client components.
// We can move this to a server component if needed, but for now we'll keep it simple.
// export const metadata: Metadata = {
//   title: 'PixelKliQ HQ - Modern Digital Solutions',
//   description: 'PixelKliQ offers cutting-edge digital solutions in Hyderabad, from creative design to tech development. Partner with us to elevate your brand.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>PixelKliQ HQ - Modern Digital Solutions</title>
        <meta name="description" content="PixelKliQ offers cutting-edge digital solutions in Hyderabad, from creative design to tech development. Partner with us to elevate your brand." />
      </head>
      <body className={cn("font-body antialiased", fontBody.variable, fontCode.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <SmoothCursor />
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
