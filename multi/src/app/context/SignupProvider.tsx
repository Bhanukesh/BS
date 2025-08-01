'use client';

import { SignupProvider } from './SignupContext';

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <SignupProvider>{children}</SignupProvider>;
}