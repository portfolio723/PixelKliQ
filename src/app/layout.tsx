
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
  display: 'swap',
  variable: '--font-body',
});

const fontCode = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>PixelKliQ</title>
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
