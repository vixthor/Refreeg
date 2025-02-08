
import { db, storage } from "./config";
import { collection, addDoc, getDocs, query, where, count } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { revalidatePath } from 'next/cache';
import { saveAs } from 'file-saver';

export const saveBookDriveData = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "bookdrive"), {
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

export async function savePetition(data) {
  try {
    const petitionRef = collection(db, "petitions");
    const docRef = await addDoc(petitionRef, data);
    console.log("Petition saved with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving petition:", error);
    throw error;
  }
}

export async function getTotalPetitionCount() {
  try {
    const petitionRef = collection(db, 'petitions');
    const snapshot = await getDocs(petitionRef);
    const count = snapshot.size; // Total number of documents
    return count;
  } catch (error) {
    console.error('Error fetching petition count:', error);
    throw error;
  }
}

export async function checkEmailExists(email) {
  try {
    const petitionRef = collection(db, "petitions");
    const q = query(petitionRef, where("Email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty; // Returns true if the email exists
  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
}

export const exportEmails = async () => {
  try {
    const collectionName = "petitions"; // Replace with your collection name
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    console.log(snapshot.size)

    if (snapshot.empty) {
      console.log('No documents found in the collection.');
      return;
    }

    // Extract all emails into an array
    const emails = [];
    let count = 0;
    snapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data); // Log the document data to verify the field name
      if (data.email|| data.Email) { 
       const email = data.email || data.Email// Ensure the field name matches the one in Firestore
        emails.push(email);
      }
    });
    console.log(emails.length, snapshot.size)
    // Save emails to a JSON file
    const jsonFilePath = './emails.json';
    const blob = new Blob([JSON.stringify(emails, null, 2)], { type: 'application/json' });
    saveAs(blob, 'emails.json');

    console.log(`Successfully exported ${emails.length} emails to ${jsonFilePath}`);
  } catch (error) {
    console.error('Error fetching emails:', error);
  }
};


