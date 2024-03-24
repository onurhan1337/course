import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/header';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Course',
  description: 'Template for Video-based platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50`}>
        <Header />

        <main className="overflowed text-gray-1200 mx-auto my-12 max-w-[1144px] px-4 antialiased sm:my-32 md:my-[3px] md:mb-40 md:px-6">
          {children}
        </main>

        <Toaster />
      </body>
    </html>
  );
}
