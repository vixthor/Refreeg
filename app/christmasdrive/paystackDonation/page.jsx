'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaystackButton } from 'react-paystack';
import { db } from '../../../lib/firebase/config'; // Ensure this is set up
import { collection, addDoc } from 'firebase/firestore';

const Donate = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY; // Replace with your key

  const handlePaystackSuccess = async (reference) => {
    try {
      await addDoc(collection(db, "donations"), {
        name,
        email,
        amount: Number(amount),
        reference: reference.reference,
        timestamp: new Date(),
      });
      router.push("/christmasdrive/whatareyoudonating");
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects amount in kobo
    publicKey,
    text: "Donate Now",
    onSuccess: handlePaystackSuccess,
    onClose: () => console.log("Payment canceled"),
  };

  const closeModal = () => {
    router.push("/christmasdrive/whatareyoudonating");
  };

  const style = {
    modalOverlay: "fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50",
    modalContent: "bg-white rounded-lg p-6 shadow-lg text-center max-w-md mx-auto",
    illustration: "w-48 h-48 mx-auto mb-4",
    modalTitle: "text-xl font-semibold mb-2 text-gray-800",
    modalMessage: "text-gray-600 mb-4",
    closeButton: "bg-[#1369A1] text-white px-4 py-2 rounded hover:bg-[#0A4B79]",
  };

  return (
    <div className="px-4">
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make your donation here 😊🎄
      </h1>
      <div className="text-center text-sm text-gray-500 mb-4">
        All donations are processed in Naira (₦).
      </div>
      <div className="max-w-md mx-auto my-4">
        <input
          type="text"
          placeholder="Name"
          className="block w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="block w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount in Naira"
          className="block w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {name && email && amount ? (
          <PaystackButton
            {...componentProps}
            className="block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#0A4B79] hover:shadow-lg"
          />
        ) : (
          <button
            disabled
            className="block w-full px-4 py-2 bg-gray-300 text-white rounded-md cursor-not-allowed"
          >
            Please fill all fields
          </button>
        )}
      </div>
    </div>
  );
};

export default Donate;