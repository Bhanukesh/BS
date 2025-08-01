'use client';

import { useSignupForm } from '@/app/context/SignupContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function Step3() {
  const router = useRouter();
  const { data } = useSignupForm();

  const handleSubmit = () => {
    console.log('Submitting data:', data);
    // You can send `data` to an API here
    alert('Registration submitted!');
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">Step 3: Review & Submit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>First Name:</strong> {data.firstName}</p>
          <p><strong>Last Name:</strong> {data.lastName}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Password:</strong> {data.password}</p>
          <p><strong>Address 1:</strong> {data.address1}</p>
          <p><strong>Address 2:</strong> {data.address2}</p>
          <p><strong>City:</strong> {data.city}</p>
          <p><strong>State:</strong> {data.state}</p>
          <p><strong>Zip:</strong> {data.zip}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push('/signup/step2')}>Back</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
