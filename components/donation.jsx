import { FormWrapper } from "./formWrapper";
import { bookSchema, deliverySchema, imageSchema, pickUpSchema } from "@/constants/schema";
import { BookDonationForm, ImageUploadForm, IsDeliveryForm, PickupDetails } from "./form";
import { uploadImage } from "@/lib/firebase/action";

export const BookDonationPage = ({ formData, onFormDataChange, step }) => {
    // const {
    //   control,
    //   handleSubmit,
    //   formState: { errors },
    // } = useForm({
    //   resolver: zodResolver(bookSchema),
    //   defaultValues: formData,
    // });

    const onSubmit = (data) => {
        const bookdata = {
            title: data.title,
            author: data.author,
            condition: data.condition,
            numberOfBooks: data.numberOfBooks,
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
            address: data.address,
        };
        onFormDataChange(bookdata);
    };

    return (
        <FormWrapper
            step={step}
            title="Book Donation Form"
            onSubmit={onSubmit}
            hasImage
            noPrevButton
            schema={bookSchema}
            defaultValues={formData}
        // Center the form horizontally
        >
            <BookDonationForm />
        </FormWrapper>
    );
};

export const ImageUploadPage = ({ formData, onFormDataChange, step }) => {
    const onSubmit = async (data) => {
        try {
            if (data && data.image) {
                const imgUrl = await uploadImage(data.image); 
                const imgData = { img: imgUrl };
                onFormDataChange(imgData);
            } else {
                console.error("No image file provided.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <FormWrapper
            step={step}
            title="Image Upload Form"
            onSubmit={onSubmit}
            hasImage
            schema={imageSchema}
            defaultValues={formData}
        >
            <ImageUploadForm />
        </FormWrapper>
    );
}

export const IsDeliveryPage = ({ formData, onFormDataChange, step }) => {
    const onSubmit = (data) => {
        const deliveryData = {
            deliveryMethod: data.deliveryMethod,
        };
        onFormDataChange(deliveryData);
    };

    return (
        <FormWrapper
            step={step}
            title="Delivery Form"
            onSubmit={onSubmit}
            hasImage
            schema={deliverySchema}
            defaultValues={formData}
        >
            <IsDeliveryForm />
        </FormWrapper>
    );
}


export const PickupDetailsPage = ({ formData, onFormDataChange, step }) => {
    const onSubmit = (data) => {
        const pickUpDetails = {
            fullname: data.fullname,
            email: data.email,
            phoneNumber: data.phoneNumber, // Adjust as needed for phone number validation
            pickUpAddress: data.pickUpAddress,
        };
        onFormDataChange({pickUpDetails});
    };

    return (
        <FormWrapper
            step={step}
            title="Pickup Details Form"
            onSubmit={onSubmit}
            hasImage
            schema={pickUpSchema}
            defaultValues={formData}
        >
            <PickupDetails />
        </FormWrapper>
    )
}