'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useSignupForm } from '@/app/context/SignupContext';
import { useState } from 'react';

export default function Step1() {
  const router = useRouter();
  const { data, updateField } = useSignupForm();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (
      data.firstName.trim() &&
      data.lastName.trim() &&
      data.email.trim() &&
      data.password.trim()
    ) {
      setError('');
      router.push('/signup/step2');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Step 1: Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="First Name"
            value={data.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
          />

          <Input
            placeholder="Last Name"
            value={data.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
          />

          <Input
            placeholder="Email"
            type="email"
            value={data.email}
            onChange={(e) => updateField('email', e.target.value)}
          />

          <Input
            placeholder="Password"
            type="password"
            value={data.password}
            onChange={(e) => updateField('password', e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button onClick={handleNext}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
