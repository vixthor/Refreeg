// components/FormSwitcher.js
'use client';
import { useState } from 'react';
import { BookDonationForm, ImageUploadForm } from './form';
// Import your final form

const FormSwitcher = ({ step }) => {
    const [formData, setFormData] = useState({}); // Initialize form data state

    const handleFormDataChange = (newData) => {
        setFormData(prevData => ({ ...prevData, ...newData }));
    };

    const renderForm = () => {
        switch (step) {
            case 1:
                return <BookDonationForm formData={formData} onFormDataChange={handleFormDataChange} step={step} />;
            case 2:
                return <ImageUploadForm  onFormDataChange={handleFormDataChange} step={step} />;
           
        }
    };

    return <>{renderForm()}</>;
};

export default FormSwitcher;