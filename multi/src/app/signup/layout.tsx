'use client';

import '../globals.css';
import { SignupProvider } from '@/app/context/SignupContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SignupProvider>{children}</SignupProvider>
      </body>
    </html>
  );
}
