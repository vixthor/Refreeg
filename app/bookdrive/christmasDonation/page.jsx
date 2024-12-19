"use client";

import Header from "../../../components/shared/Header";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase/config"; // Importing db from your Firebase configuration

// Dynamically import PaystackButton to avoid SSR issues
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  {
    ssr: false,
  }
);

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

  const handlePayment = () => {
    if (!email || !amount || !name || !phone) {
      alert("All fields are required. Please fill out the form completely.");
      return false; // Prevents proceeding if validation fails
    }
    return true; // Proceed with the payment
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
      if (handlePayment()) {
        alert("Thanks for donating to us! We do not take it for granted!");
        saveDonorDetails();
      }
    },
    // onClose: () => alert("Wait! Please donate, don't go!"),
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
          required
        />
        <input
          type="number"
          placeholder="Amount"
          className={style.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          className={style.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Phone number"
          className={style.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <PaystackButton
          className={style.button}
          {...componentProps}
          onClick={handlePayment}
        />
      </div>
    </div>
  );
};

export default Donate;
