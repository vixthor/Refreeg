'use client';
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';




export function FormInput({
  name,
  control,
  error,
  label,
  type = 'text',
  placeholder,
  multiline = false,
}) {
  const inputClasses = `w-full px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500 transition-colors ${
    error ? 'border-red-500' : 'border-gray-300'
  }`;

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {multiline ? (
              <textarea
                {...field}
                id={name}
                placeholder={placeholder}
                className={`${inputClasses} min-h-[120px] resize-y`}
              />
            ) : (
              <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={inputClasses}
              />
            )}
          </>
        )}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}