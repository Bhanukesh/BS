'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useSignupForm } from '@/app/context/SignupContext';

export default function Step2() {
  const router = useRouter();
  const { data, updateField } = useSignupForm();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (
      data.address1.trim() &&
      data.address2.trim() &&
      data.city.trim() &&
      data.state.trim() &&
      data.zip.trim()
    ) {
      setError('');
      router.push('/signup/step3');
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Step 2: Additional Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Address Line 1"
            value={data.address1}
            onChange={(e) => updateField('address1', e.target.value)}
          />
          <Input
            placeholder="Address Line 2"
            value={data.address2}
            onChange={(e) => updateField('address2', e.target.value)}
          />
          <Input
            placeholder="City"
            value={data.city}
            onChange={(e) => updateField('city', e.target.value)}
          />
          <Input
            placeholder="State"
            value={data.state}
            onChange={(e) => updateField('state', e.target.value)}
          />
          <Input
            placeholder="Zip Code"
            value={data.zip}
            onChange={(e) => updateField('zip', e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push('/signup/step1')}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
