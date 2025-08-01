'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useSignupForm } from '@/app/context/SignupContext';  

export default function Step3() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/signup/step2');
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Step 3: Confirm Info</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <p className="font-semibold text-sm">First Name:</p>
            <Input className="text-black-500 text-sm "/>
          </div>
          <div>
            <p className="font-semibold text-sm">Email:</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
          <div>
            <p className="font-semibold text-sm">Password:</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
          <div>
            <p className="font-semibold text-sm">Address Line 1:</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
          <div>
            <p className="font-semibold text-sm">Address Line 2:</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
          <div>
            <p className="font-semibold text-sm">City:</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
          <div>
            <p className="font-semibold text-sm">State:</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
          <div>
            <p className="font-semibold text-sm">Zip Code:</p>
            <p className="text-gray-500 text-sm"></p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack}>Back</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
