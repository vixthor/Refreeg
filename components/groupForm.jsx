// components/FormSwitcher.js
'use client';
import { useState } from 'react';
import { BookDonationPage, ImageUploadPage, IsDeliveryPage, PickupDetailsPage } from './donation';
import ThankYou from './ThankYou';

// Import your final form

const FormSwitcher = ({ step }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        condition: '',
        numberOfBooks: '',
        pickUpDetails: {
            fullname: "",
            email: '',
            phoneNumber: '', // Adjust as needed for phone number validation
            pickUpAddress: '',
        },
        deliveryMethod: '',
        img: null,
    }); // Initialize form data state

    const handleFormDataChange = (newData) => {
        setFormData(prevData => ({ ...prevData, ...newData }));
    };
    console.log(formData);

    const renderForm = () => {
        switch (step) {
            case 1:
                return <BookDonationPage formData={formData} onFormDataChange={handleFormDataChange} step={step} />;
            case 2:
                return <ImageUploadPage formData={formData.img} onFormDataChange={handleFormDataChange} step={step} />;
            case 3:
                return <IsDeliveryPage formData={formData.deliveryMethod} onFormDataChange={handleFormDataChange} step={step} />
            case 4:
                return <PickupDetailsPage formData={formData.pickUpDetails} onFormDataChange={handleFormDataChange} step={step} />
            case 5:
                return <ThankYou />;
        }
    };

    return <>{renderForm()}</>;
};

export default FormSwitcher;