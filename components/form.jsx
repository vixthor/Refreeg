// components/form.js
'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
    Box,
    Button,
    FormControl,
    Input,
    Select,
    Text,
    VStack,
    FormErrorMessage,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FormProgressBar } from './progressBar';

const bookSchema = z.object({
    title: z.string().min(1, 'Book title is required'),
    author: z.string().min(1, 'Author name is required'),
    condition: z.enum(['new', 'gently used', 'well used'], {
        errorMap: () => ({ message: 'Condition is required' }),
    }),
    numberOfBooks: z.number().min(1, 'At least one book must be donated').max(100, 'Max 100 books'),
});

export const BookDonationForm = ({ formData, onFormDataChange, step }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(bookSchema),
        defaultValues: formData,
    });

    const onSubmit = (data) => {
        console.log(data);
        onFormDataChange(data);
        const params = new URLSearchParams(searchParams);
        params.set('step', step + 1);
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Box display="flex" alignItems="center" p={6}>
            <Image src={'/book.svg'} alt="Book Image" width={200} height={200} />
            <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)} flex="1" ml={4}>
                <FormProgressBar currentStep={step} />
                <Text fontSize="xl" mb={4}>Book Donation Form</Text>
                <FormControl isInvalid={!!errors.title}>
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => (
                            <Input
                                id="title"
                                placeholder="Enter book title"
                                borderBottom="1.5px solid"
                                borderColor={errors.title ? 'red.500' : 'gray.300'}
                                outline="none"
                                variant={'flushed'}
                                {...field}
                            />
                        )}
                    />
                    <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.author}>
                    <Controller
                        name="author"
                        control={control}
                        render={({ field }) => (
                            <Input
                                id="author"
                                placeholder="Enter author name"
                                borderBottom="1.5px solid"
                                borderColor={errors.author ? 'red.500' : 'gray.300'}
                                outline="none"
                                variant={'flushed'}
                                {...field}
                            />
                        )}
                    />
                    <FormErrorMessage>{errors.author?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.condition}>
                    <Controller
                        name="condition"
                        control={control}
                        render={({ field }) => (
                            <Select
                                id="condition"
                                placeholder="Select condition"
                                borderBottom="1.5px solid"
                                borderColor={errors.condition ? 'red.500' : 'gray.300'}
                                variant={'flushed'}
                                {...field}
                            >
                                <option value="new">New</option>
                                <option value="gently used">Gently Used</option>
                                <option value="well used">Well Used</option>
                            </Select>
                        )}
                    />
                    <FormErrorMessage>{errors.condition?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.numberOfBooks}>
                    <Controller
                        name="numberOfBooks"
                        control={control}
                        render={({ field }) => (
                            <Input
                                id="numberOfBooks"
                                type="number"
                                placeholder="Enter number of books"
                                borderBottom="1.5px solid"
                                borderColor={errors.numberOfBooks ? 'red.500' : 'gray.300'}
                                outline="none"
                                variant={'flushed'}
                                onChange={(e) => {
                                    const value = Number(e.target.value);
                                    field.onChange(value);
                                }}
                                value={field.value || ''}
                            />
                        )}
                    />
                    <FormErrorMessage>{errors.numberOfBooks?.message}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="teal">Next</Button>
            </VStack>
        </Box>
    );
};

const imageSchema = z.object({
    image: z.instanceof(File).nullable().refine(file => file !== null, {
        message: 'Image is required',
    }),
});

export const ImageUploadForm = ({ onFormDataChange, step }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(imageSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        onFormDataChange(data.image);
        const params = new URLSearchParams(searchParams);
        params.set('step', step + 1);
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Box display="flex" alignItems="center" p={6}>
            <Image src={'/book.svg'} alt="Upload Image" width={200} height={200} />
            <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)} flex="1" ml={4}>
                <FormProgressBar currentStep={step} />
                <Text fontSize="xl" mb={4}>Upload Image of Books</Text>
                <FormControl isInvalid={!!errors.image}>
                    <Controller
                        name="image"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                variant="flushed"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    onChange(file);
                                }}
                            />
                        )}
                    />
                    <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="teal">Upload Image</Button>
            </VStack>
        </Box>
    );
};