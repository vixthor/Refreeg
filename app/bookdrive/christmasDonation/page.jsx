"use client";
import Header from "../../../components/shared/Header";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Link from "next/link";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const Donate = () => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const saveDonorDetails = async () => {
    try {
      const docRef = await addDoc(collection(db, "Christmas drive donors"), {
        name,
        email,
        phone,
        amount,
        donatedAt: new Date().toISOString(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Thanks for donating! Your details have been saved.");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error saving your details. Please try again.");
    }
  };

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects the amount in kobo
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for donating to us! We do not take it for granted!");
      saveDonorDetails();
    },
    onClose: () => alert("Wait! Please donate, don't go!"),
  };

  const style = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button:
      "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#0A4B79] hover:shadow-lg",
  };

  return (
    <div className="px-4">
      <Header />
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make your payment here
      </h1>
      <div className="max-w-md mx-auto my-4">
        <input
          type="email"
          placeholder="Email"
          className={style.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className={style.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          className={style.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone number"
          className={style.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <PaystackButton className={style.button} {...componentProps} />
      </div>
    </div>
  );
};

export default Donate;
