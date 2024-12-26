'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { petitionSchema } from '../constants/schema';
import { FormInput } from './forminput';
import { savePetition } from '../lib/firebase/action';
import { useRouter } from 'next/navigation';

export function PetitionForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(petitionSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async(data) => {
    console.log(data);
   await savePetition(data);
   router.push('/petitions/success');
   
    
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
      
      
      <FormInput
        name="email"
        control={control}
        error={errors.email}
        type="email"
        placeholder="Email Address"
      />
      
      <FormInput
        name="message"
        control={control}
        error={errors.message}
        placeholder="What would you like to tell us on the matter?"
        multiline
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit Petition
      </button>
    </form>
  );
}