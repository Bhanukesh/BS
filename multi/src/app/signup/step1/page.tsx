'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


export default function Step1() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/signup/step2')
    };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col justify-between">
      <h1 className="text-2xl font-semibold mb-6">Step 1</h1>

      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-1">First Name</p>
          <Input placeholder="Enter your first name" />
        </div>

        <div>
          <p className="mb-1">Last Name</p>
          <Input placeholder="Enter your last name" />
        </div>

        <div>
          <p className="mb-1">Email</p>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <p className="mb-1">Password</p>
          <Input type="password" placeholder="Enter your password" />
        </div>
      </div>
      
      <div className="flex justify-end mt-6">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}