// src/app/context/SignupContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type (no change)
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

// Reuse field names only once, cast the object as FormData
const defaultData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
} as FormData;

interface SignupContextType {
  data: FormData;
  updateField: (field: keyof FormData, value: string) => void;
}

const SignupContext = createContext<SignupContextType | null>(null);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FormData>(defaultData);

  const updateField = (field: keyof FormData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <SignupContext.Provider value={{ data, updateField }}>
      {children}
    </SignupContext.Provider>
  );
}

export function useSignupForm() {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error('useSignupForm must be used within a SignupProvider');
  }
  return context;
}
