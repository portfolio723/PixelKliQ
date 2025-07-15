
'use client';
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from 'next-themes';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
