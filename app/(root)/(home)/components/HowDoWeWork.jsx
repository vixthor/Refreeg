import Card from '@/components/shared/Card'
import { HowWeWork } from '@/constants'
import React from 'react'

const HowDoWeWork = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] py-[25px] mt-10'>
        <div>
          <div className="w-fit mx-auto">
        <p className='text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold'>How do we work?</p>
        <div className='w-full md:w-[200px] h-[8px] rounded-[20px] bg-accent mx-auto' />
          </div>

        <p className='text-[16px] text-center mt-[20px] mb-[40px]'>
        We make crowdfunding unique by fostering donations through the blockchain thereby fostering <br className='hidden md:block' /> transparency
        </p>
        </div>

        <div className="full flex flex-wrap gap-x-24 justify-center">
            {
                HowWeWork.map((card) => (
                    
                    <Card key={card.src} variant={card.variant}  src={card.src} title={card.title} content={card.content}/>
                ))
            }
        </div>
    </section>
  )
}

export default HowDoWeWork