"use client"
import React, { useState } from 'react'



const Reveal = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleFAQ = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div className={`w-full md:max-w-sm mx-auto my-8 p-6 ${!isOpen ? 'bg-faq-2' : 'bg-faq-1'} text-white rounded-lg transition-all duration-300 ease-in-out`}>
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleFAQ}
      >
        <h3 className={`text-l md:text-xl font-semibold ${!isOpen ? 'text-black' : 'text-white'}`}>{question}</h3>
        <span className={`text-2xl ${!isOpen ? 'text-black' : 'text-white'} `}>{isOpen ? '−' : '+'}</span>
      </div>
      {
        isOpen && (
          <hr className="my-2 border-white opacity-50" />
        )
      }
      <div 
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <p className="mt-4">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default Reveal