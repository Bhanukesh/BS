'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Step2() {
    const router = useRouter();
    const handleNext = () => {
        router.push('/signup/step3')        
    };

    const handleBack = () => {
        router.push('/signup/step1')        
    };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col justify-between">
      {/* Page heading */}
      <h1 className="text-2xl font-semibold mb-6">Step 2</h1>

      {/* Address form section */}
      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-1">Address Line 1</p>
          <Input placeholder="Enter address line 1" />
        </div>

        <div>
          <p className="mb-1">Address Line 2</p>
          <Input placeholder="Enter address line 2 (optional)" />
        </div>

        <div>
          <p className="mb-1">City</p>
          <Input placeholder="Enter city" />
        </div>

        <div>
          <p className="mb-1">State</p>
          <Input placeholder="Enter state" />
        </div>

        <div>
          <p className="mb-1">Zip Code</p>
          <Input placeholder="Enter zip code" />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}