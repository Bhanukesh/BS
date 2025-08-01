'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useSignupForm } from '@/app/context/SignupContext';  

export default function Step1() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/signup/step2');
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Step 1: Basic Information</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <p className="mb-1 text-sm">First Name</p>
            <Input placeholder="Enter your first name" />
          </div>

          <div>
            <p className="mb-1 text-sm">Last Name</p>
            <Input placeholder="Enter your last name" />
          </div>

          <div>
            <p className="mb-1 text-sm">Email</p>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <div>
            <p className="mb-1 text-sm">Password</p>
            <Input type="password" placeholder="Enter your password" />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button onClick={handleNext}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
