import { Box, VStack, Button, Text } from '@chakra-ui/react';
import { FormProgressBar } from './progressBar';
import Image from 'next/image';
import { ChevronRight, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

export const FormWrapper = ({
    step,
    title,
    description,
    children,
    onSubmit,
    showPrevNextButtons = true,
    hasImage = true,
    canSkipStep = false,
    noPrevButton = false,
    schema,
    defaultValues
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues
    });

    const handlePrev = () => {
        const params = new URLSearchParams(searchParams);
        params.set('step', step - 1);
        replace(`${pathname}?${params.toString()}`);
    };

    const handleNext = () => {
        const params = new URLSearchParams(searchParams);
        step <= 5 ? params.set('step', step + 1) : params.set('step', step);
        replace(`${pathname}?${params.toString()}`);
    };

    const handleFormSubmit = (data) => {
        onSubmit(data);
        handleNext();
    };

    return (
        <Box display="flex" alignItems="center" p={6} maxWidth="800px" mx="auto">
            {hasImage && (
                <Image
                    src="/book.svg"
                    className="hidden md:block"
                    alt="Book Image"
                    width={200}
                    height={200}
                />
            )}
            <VStack spacing={4} as="form" onSubmit={handleSubmit(handleFormSubmit)} flex="1" ml={4}>
                <div className={`flex w-full items-center ${canSkipStep ? "justify-between" : "justify-center"} `}>
                    <FormProgressBar currentStep={step} />
                    {canSkipStep && (
                        <p
                            className="cursor-pointer text-primaryShades-700 flex items-center"
                            onClick={handleNext}
                        >
                            Skip this Step <ChevronRight />
                        </p>
                    )}
                </div>
                <Text fontSize="xl" mb={4}>{title}</Text>
                {description && <Text mb={2} fontSize="md">{description}</Text>}

                {/* Pass control and errors to children */}
                {React.Children.map(children, child =>
                    React.cloneElement(child, { control, errors })
                )}

                {showPrevNextButtons && (
                    <div className="flex w-full items-center justify-between">
                        {!noPrevButton && (
                            <Button
                                className="bg-transparent text-primaryShades-900 rounded-full h-fit p-0"
                                onClick={handlePrev}
                            >
                                <ArrowLeftCircle width={50} height={50} />
                            </Button>
                        )}
                        <Button
                            type="submit"
                            className={`bg-transparent text-primaryShades-900 rounded-full p-0 ${noPrevButton ? ' mx-auto' : ''}`}
                        >
                            <ArrowRightCircle width={50} height={50} />
                        </Button>
                    </div>
                )}
            </VStack>
        </Box>
    );
};
