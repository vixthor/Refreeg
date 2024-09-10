// components/FormSwitcher.js
'use client';
import { useState } from 'react';
import { BookDonationForm, ImageUploadForm, IsDeliveryForm, PickupDetails } from './form';

// Import your final form

const FormSwitcher = ({ step }) => {
    const [formData, setFormData] = useState({
        title:'',
        author:'',
        condition:'',
        numberOfBooks:''
    }); // Initialize form data state

    const handleFormDataChange = (newData) => {
        setFormData(prevData => ({ ...prevData, ...newData }));
    };
    console.log(formData);

    const renderForm = () => {
        switch (step) {
            case 1:
                return <BookDonationForm formData={formData} onFormDataChange={handleFormDataChange} step={step} />;
            case 2:
                return <ImageUploadForm formData={formData.img}  onFormDataChange={handleFormDataChange} step={step} />;
            case 3:
                return <IsDeliveryForm formData={formData.deliveryMethod} onFormDataChange={handleFormDataChange} step={step}/>
            case 4:
                return <PickupDetails formData={formData} onFormDataChange={handleFormDataChange} step={step}/>
        }
    };

    return <>{renderForm()}</>;
};

export default FormSwitcher;