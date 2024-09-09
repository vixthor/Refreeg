'use client';
import React from 'react';
import {
    Box,
    Text,
    VStack,
    HStack,
    Divider,
} from '@chakra-ui/react';

export const FormProgressBar = ({ currentStep = 3,className="" }) => {
    const totalSteps = 5; // Total number of steps in your form

    return (
            <HStack spacing={4} width="50%" className={className}>
                {[...Array(totalSteps)].map((_, index) => (
                    <Box
                        key={index}
                        flex="1"
                        height="10px"
                        bg={index < currentStep ? '#0070E0' : 'gray.200'} // Highlight completed steps
                        borderRadius="md"
                        position="relative"
                        marginRight={index < totalSteps - 1 ? '8px' : '0'} // Add spacing between segments
                    >
                        
                    </Box>
                ))}
            </HStack>

        
    );
};