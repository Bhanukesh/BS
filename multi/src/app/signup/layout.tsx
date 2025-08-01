'use client';

import '../globals.css';
import { Inter } from 'next/font/google';
import { SignupProvider } from '@/app/context/SignupContext';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SignupProvider>{children}</SignupProvider>
      </body>
    </html>
  );
}
