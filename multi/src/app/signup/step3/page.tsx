'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Step3() {
    const router = useRouter();

    const handleBack = () => {
        router.push('/signup/step2')
    };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col justify-between">
      <h1 className="text-2xl font-semibold mb-6">Confirm Info</h1>

      {/* Info Boxes - Placeholder layout */}
      <div className="space-y-4">
        <div>
          <p className="font-semibold">First Name:</p>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <p className="font-semibold">Email:</p>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <p className="font-semibold">Password:</p>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <p className="font-semibold">Address Line 1:</p>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <p className="font-semibold">Address Line 2:</p>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <p className="font-semibold">City:</p>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <p className="font-semibold">State:</p>
          <p className="text-gray-500"></p>
        </div>
        <div>
          <p className="font-semibold">Zip Code:</p>
          <p className="text-gray-500"></p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={handleBack}>Back</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}