'use client';

import { useRouter } from 'next/navigation';
import { useSignupForm } from '@/contexts/SignupContext';
import { useState } from 'react';

export default function Step2() {
  const router = useRouter();
  const { data, updateField } = useSignupForm();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!data.address.trim()) {
      setError('Address is required.');
      return;
    }
    router.push('/signup/step3');
  };

  const handleBack = () => {
    router.push('/signup/step1');
  };

  return (
    <div className="max-w-md w-full space-y-6">
      <h2 className="text-2xl font-semibold text-center">Step 2: Additional Info</h2>
      
      {[
        { label: 'Address', type: 'text', field: 'address' },
        { label: 'Profile Info', type: 'text', field: 'profileInfo' },
      ].map(({ label, type, field }) => ( // Array mapping: Dynamic form generation
        <div key={field}> {/* React keys: Unique identifier for reconciliation */}
          <label className="block mb-1 font-medium">{label}</label>
          <input
            type={type}
            value={data[field] || ''} // Fallback values: Prevent undefined errors
            onChange={(e) => updateField(field, e.target.value)} // Event handling: Update shared state
            className="w-full border p-2 rounded"
          />
        </div>
      ))}

      {error && <p className="text-red-500 text-sm">{error}</p>} {/* Conditional rendering: Show error if exists */}

      <div className="flex gap-4"> {/* Layout: Flexbox for button arrangement */}
        <button
          onClick={handleBack} // Event handling: Navigate backward
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 w-1/2"
        >
          Back
        </button>
        <button
          onClick={handleNext} // **Event handling**: Validate and navigate forward
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-1/2"
        >
          Next
        </button>
      </div>
    </div>
  );
}