'use client';

import { createContext, useContext, useState } from 'react';

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

const defaultData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
};

const SignupContext = createContext<any>(null);

export function SignupProvider({ children }: { children: React.ReactNode }) {
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
  return useContext(SignupContext);
}