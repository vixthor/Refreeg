"use client";

import Header from "../../../components/shared/Header";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase/config";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  {
    ssr: false,
  }
);

const Donate = () => {
  const router = useRouter();
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  const getSanitizedAmount = () => {
    const sanitized = amount.replace(/,/g, ""); // Remove commas
    return parseFloat(sanitized) || 0; // Convert to number, default to 0 if invalid
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Valid email is required.";
    if (
      !amount.trim() ||
      isNaN(getSanitizedAmount()) ||
      getSanitizedAmount() <= 0
    )
      newErrors.amount = "Enter a valid amount greater than 99 Naira.";
    if (!phone.trim() || !/^\d{10,15}$/.test(phone))
      newErrors.phone = "Enter a valid phone number (10-15 digits).";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0); // Update validity
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    validateForm(); // Revalidate form on input change
  };

  const saveDonorDetails = async () => {
    try {
      await addDoc(collection(db, "Christmas drive donors"), {
        name,
        email,
        phone,
        amount: getSanitizedAmount(),
        donatedAt: new Date().toISOString(),
      });
      router.push("/christmasdrive/donations/ThankYou");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      saveDonorDetails();
    }
  };

  const componentProps = {
    email,
    amount: getSanitizedAmount() * 100,
    metadata: { name, phone },
    publicKey,
    text: "Pay Now",
    onSuccess: handleSubmit,
    onClose: () => alert("Wait! Please donate, don't go!"),
  };

  const style = {
    input:
      "block w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    error: "text-red-500 text-sm mb-2",
    button:
      "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#0A4B79] hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed",
  };

  return (
    <div className="px-4">
      <Header />
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make your donation here 😊🎄
      </h1>
      <div className="max-w-md mx-auto my-4">
        <input
          type="text"
          placeholder="Name"
          className={style.input}
          value={name}
          onChange={handleInputChange(setName)}
        />
        {errors.name && <div className={style.error}>{errors.name}</div>}

        <input
          type="text"
          placeholder="Amount to Donate (e.g., 20,000)"
          className={style.input}
          value={amount}
          onChange={handleInputChange(setAmount)}
        />
        {errors.amount && <div className={style.error}>{errors.amount}</div>}

        <input
          type="email"
          placeholder="Email"
          className={style.input}
          value={email}
          onChange={handleInputChange(setEmail)}
        />
        {errors.email && <div className={style.error}>{errors.email}</div>}

        <input
          type="number"
          placeholder="Phone number"
          className={style.input}
          value={phone}
          onChange={handleInputChange(setPhone)}
        />
        {errors.phone && <div className={style.error}>{errors.phone}</div>}

        <PaystackButton
          className={style.button}
          {...componentProps}
          disabled={!isFormValid} // Disable button if form is invalid
        />
      </div>
    </div>
  );
};

export default Donate;
