import '@/app/globals.css';

import { SignupProvider } from '@/app/context/SignupContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SignupProvider>
          {children}
        </SignupProvider>
      </body>
    </html>
  );
}
