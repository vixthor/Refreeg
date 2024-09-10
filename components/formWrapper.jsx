// components/FormWrapper.js
import { Box, VStack, Button, Text, FormControl } from '@chakra-ui/react';
import { FormProgressBar } from './progressBar';
import Image from 'next/image';
import { ChevronRight, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const FormWrapper = ({
    step,
    title,
    description,
    children,
    onSubmit,
    showPrevNextButtons = true, // Optional to toggle previous/next buttons
    hasImage = true, // Optional to toggle form image
    canSkipStep = false,
    noPrevButton = false // Optional to allow skipping steps
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handlePrev = () => {
        const params = new URLSearchParams(searchParams);
        params.set('step', step - 1);
        replace(`${pathname}?${params.toString()}`);
    };

    const handleNext = () => {
        const params = new URLSearchParams(searchParams);
        params.set('step', step + 1);
        replace(`${pathname}?${params.toString()}`);
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
            <VStack spacing={4} as="form" onSubmit={onSubmit} flex="1" ml={4}>
                <div className={`flex w-full items-center ${canSkipStep?"justify-between":"justify-center"} `}>
                    <FormProgressBar currentStep={step}  />
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

                {/* Form-specific fields will be passed here */}
                {children}

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
                            className={`bg-transparent  text-primaryShades-900 rounded-full p-0 ${noPrevButton ? ' mx-auto' : ''}`}
                            onClick={handleNext}
                        >
                            <ArrowRightCircle width={50} height={50} />
                        </Button>
                    </div>
                )}
            </VStack>
        </Box>
    );
};
