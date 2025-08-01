'use client';

import { useRouter } from 'next/navigation';
import { SignupProvider, useSignupForm } from '@/app/context/SignupContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Page() {
  return (
    <SignupProvider>
      <SignupContent />
    </SignupProvider>
  );
}

function SignupContent() {
  const router = useRouter();
  const { updateField } = useSignupForm();

  const handleStartRegistration = () => {
    updateField('firstName', '');
    updateField('lastName', '');
    updateField('email', '');
    updateField('password', '');
    updateField('address1', '');
    updateField('address2', '');
    updateField('city', '');
    updateField('state', '');
    updateField('zip', '');
    router.push('/signup/step1');
  };

  return (
    <div className="max-w-md w-full mx-auto space-y-6 text-center flex flex-col items-center justify-center min-h-[60vh] bg-white text-black">
      <h1 className="text-3xl font-bold text-foreground">Welcome!</h1>
      <div className="space-y-4 w-full">
        <p className="text-lg text-muted-foreground">
          Please register – it's a simple 3-step process
        </p>
        <Card className="w-full">
          <CardHeader className="pb-1">
            <CardTitle className="text-base">What to expect:</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Step 1: Basic Information</p>
              <p>Step 2: Additional Details</p>
              <p>Step 3: Review & Submit</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Button onClick={handleStartRegistration} className="w-full" size="lg">
        Start Registration
      </Button>
    </div>
  );
}
 