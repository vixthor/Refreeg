import Reveal from '@/components/shared/Reveal'
import { faq } from '@/constants'
import React from 'react'

const Faqs = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] py-[25px] mt-10'>
    <div>
    <div className="w-fit mx-auto">
    <p className='text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold'>FAQs</p>
    <div className='w-full md:w-[200px] h-[8px] rounded-[20px] bg-accent mx-auto' />
    </div>

    </div> 

    <div className='grid grid-cols-1 md:grid-cols-2 gap-1 max-w-8xl mx-auto justify-center'>
      {
        faq.map((item) => (
          <Reveal key={item.key} question={item.question} answer={item.answer} />
        ))
      }
    </div>
   
</section>
  )
}

export default Faqs