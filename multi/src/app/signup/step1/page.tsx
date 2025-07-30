'use client';

import { useRouter } from 'next/navigation';
import { useSignupForm } from '@/contexts/SignupContext';
import { useState } from 'react';

export default function Step1() {
  const router = useRouter();
  const { data, updateField } = useSignupForm(); // Object destructuring
  const [error, setError] = useState('');        // Array destructuring

  const handleNext = () => {
    // **Validation**: Check required fields before proceeding
    if (!data.name.trim() || !data.email.trim()) {
      setError('Both fields are required.');
      return;
    }
    // **Navigation**: Programmatic routing to next step
    router.push('/signup/step2');
  };

  return (
    <div className="max-w-md w-full space-y-6">
      <h2 className="text-2xl font-semibold text-center">Step 1: Basic Info</h2>

      {[
        { label: 'Name', type: 'text', field: 'name' },
        { label: 'Email', type: 'email', field: 'email' },
      ].map(({ label, type, field }) => ( // Array mapping: Dynamic form generation
        <div key={field}> {/* React keys: Unique identifier for reconciliation */}
          <label className="block mb-1 font-medium">{label}</label>
          <input
            type={type}
            value={data[field]} // Controlled inputs State-driven values
            onChange={(e) => updateField(field, e.target.value)} // Event handling: Update shared state
            className="w-full border p-2 rounded"
          />
        </div>
      ))}

      {error && <p className="text-red-500 text-sm">{error}</p>} {/* Conditional rendering: Show error if exists */}

      <button
        onClick={handleNext} // Event handling: Trigger validation and navigation
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Next
      </button>
    </div>
  );
}