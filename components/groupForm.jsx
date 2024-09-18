'use client';
import { useState, useEffect } from 'react';
import { BookDonationPage, ImageUploadPage, IsDeliveryPage, PickupDetailsPage } from './donation';
import ThankYou from './ThankYou';

const FormSwitcher = ({ step, submitForm }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        condition: '',
        numberOfBooks: '',
        pickUpDetails: {
            fullname: "",
            email: '',
            phoneNumber: '',
            pickUpAddress: '',
        },
        deliveryMethod: '',
        img: null,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleFormDataChange = (newData) => {
        setFormData(prevData => ({ ...prevData, ...newData }));
    };

    useEffect(() => {
        if (!submitted && (formData.deliveryMethod === 'dropoff' || step === 5)) {
            submitForm(formData);
            setSubmitted(true);
        }
    }, [formData.deliveryMethod, step, submitForm, formData, submitted]);

    const renderForm = () => {
        if (submitted) {
            return <ThankYou />;
        }

        switch (step) {
            case 1:
                return <BookDonationPage formData={formData} onFormDataChange={handleFormDataChange} step={step} />;
            case 2:
                return <ImageUploadPage formData={formData.img} onFormDataChange={handleFormDataChange} step={step} />;
            case 3:
                return <IsDeliveryPage formData={formData.deliveryMethod} onFormDataChange={handleFormDataChange} step={step} />;
            case 4:
                return <PickupDetailsPage formData={formData.pickUpDetails} onFormDataChange={handleFormDataChange} step={step} />;
            default:
                return null; // Handle unexpected steps
        }
    };

    return <>{renderForm()}</>;
};

export default FormSwitcher;
