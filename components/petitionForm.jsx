'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { petitionSchema } from '../constants/schema';
import { FormInput } from './forminput';
import { savePetition, checkEmailExists } from '../lib/firebase/action';
import { useRouter } from 'next/navigation';

export function PetitionForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(petitionSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '', 
      receiveUpdates: false, 
    },
  });

  const onSubmit = async (data) => {
    const formattedData = {
      FirstName: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      Message: data.message, 
      Receiveupdate: data.receiveUpdates, 
    };

    const emailExists = await checkEmailExists(formattedData.Email);

    if (emailExists) {
      setError('email', {
        type: 'manual',
        message: 'This email has already been used to sign the petition.',
      });
      return; // Prevent form submission
    }

    console.log(formattedData);
    await savePetition(formattedData);
    router.push('/petitions/petition/success');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        name="firstName"
        control={control}
        error={errors.firstName}
        placeholder="First Name"
      />
      <FormInput
        name="lastName"
        control={control}
        error={errors.lastName}
        placeholder="Last Name"
      />

      <div>
        <FormInput
          name="email"
          control={control}
          error={errors.email && errors.email.type !== 'manual' ? errors.email : undefined}
          type="email"
          placeholder="Email Address"
        />
        {errors.email && errors.email.type === 'manual' && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <FormInput
        name="message"
        control={control}
        error={errors.message}
        placeholder="Would you like to provide further information on the situation?"
        multiline
      />
      
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="receiveUpdates"
          {...register('receiveUpdates')}
          className="h-5 w-5 flex-shrink-0"
        />
        <label htmlFor="receiveUpdates" className="text-black text-xs font-normal font-montserrat">
          Let me receive updates on the cause and other causes like this via email.
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit Petition
      </button>
    </form>
  );
}
