import { z } from 'zod';
export const pickUpSchema = z.object({
    fullname: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(1, "Phone number is required"), // Adjust as needed for phone number validation
    pickUpAddress: z.string().min(1, "Pickup address is required"),
});

export const deliverySchema = z.object({
    deliveryMethod: z.string().nonempty("Please select a delivery method"),
});

export const imageSchema = z.object({
    image: z
        .instanceof(File)
        .nullable()
        .refine((file) => file !== null, {
            message: "Image is required",
        }),
});


export const bookSchema = z.object({
    title: z.string().min(1, "Book title is required"),
    author: z.string().min(1, "Author name is required"),
    condition: z.enum(["new", "gently used", "well used"], {
        errorMap: () => ({ message: "Condition is required" }),
    }),
    numberOfBooks: z
        .number()
        .min(1, "At least one book must be donated")
        .max(100, "Max 100 books"),
});



export const petitionSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(0, 'Please provide at least 10 characters').max(1000, 'Message is too long'),
});

