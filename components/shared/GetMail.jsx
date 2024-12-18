"use client";
import { Mail } from "lucide-react";
import React from "react";
import { handleSubmit } from "../../lib/formActions";
import { useToast } from "@chakra-ui/react";

const GetMail = () => {
  const toast = useToast();

  return (
    <form
      action={async (formData) => {
        await handleSubmit(formData, toast);
      }}
      className="relative size-fit mt-2"
    >
      <input
        type="email"
        name="email"
        className="bg-white rounded-3xl h-[45px] outline-none border-none placeholder:text-bold placeholder:font-medium 
        placeholder:text-[12px] text-[12px] pl-[50px] pr-[120px] flex items-center w-[350px]"
        placeholder="Enter your Email"
      />
      <Mail className="text-bold size-4 absolute top-[15px] left-6" />
      <button className="bg-bold text-white font-medium flex items-center justify-center text-[12px] h-[80%] absolute top-1 right-2 px-5 rounded-3xl cursor-pointer">
        Subscribe
      </button>
    </form>
  );
};

export default GetMail;
