import { db, storage } from './config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const saveBookDriveData = async (formData) => {
    try {
        const docRef = await addDoc(collection(db, 'bookdrive'), {
            title: formData.title,
            author: formData.author,
            condition: formData.condition,
            numberOfBooks: formData.numberOfBooks,
            pickUpDetails: formData.pickUpDetails,
            deliveryMethod: formData.deliveryMethod,
            img: formData.img, 
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export const uploadImage = async (file) => {
    try {
        if (!file) {
            throw new Error("File is required for upload");
        }
       
        // Create a reference to the storage bucket location
        const storageRef = ref(storage, `images/${file.name}`);
        
        // Upload the file
        await uploadBytes(storageRef, file);
        
        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL; // Return the download URL
    } catch (error) {
        console.error("Error uploading file: ", error);
        throw error; // Rethrow the error for handling in the component
    }
};


export const handleSubmit = async (formData) => {
    'use server'; // If using Next.js server actions
    const email = formData.get('email');
    // Process the email submission here
    console.log('Submitted email:', email);
  };