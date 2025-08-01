'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useSignupForm } from '@/app/context/SignupContext';  

export default function Step2() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/signup/step3');
  };

  const handleBack = () => {
    router.push('/signup/step1');
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Step 2: Additional Details</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <p className="mb-1 text-sm">Address Line 1</p>
            <Input placeholder="Enter address line 1" />
          </div>

          <div>
            <p className="mb-1 text-sm">Address Line 2</p>
            <Input placeholder="Enter address line 2 (optional)" />
          </div>

          <div>
            <p className="mb-1 text-sm">City</p>
            <Input placeholder="Enter city" />
          </div>

          <div>
            <p className="mb-1 text-sm">State</p>
            <Input placeholder="Enter state" />
          </div>

          <div>
            <p className="mb-1 text-sm">Zip Code</p>
            <Input placeholder="Enter zip code" />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleNext}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
