import Founder from '@/components/shared/Founder'
import { Founders } from '@/constants'
import React from 'react'

const WhoWereBuiltBy = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] py-[25px] my-[200px]'>
    <div>

    <div className="w-fit mx-auto">
    <p className='text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold'>Who we're built by?</p>
    <div className='w-full md:w-[200px] h-[8px] rounded-[20px] bg-accent mx-auto' />
    </div>


    <p className='text-[16px] text-center mt-[20px] mb-[40px]'>
    RefreeG was founded by a passionate and diverse team committed to making a significant impact in African <br className='hidden md:block' /> communities through empowerment and socio-economic growth.
    </p>
    </div>

    <div className='flex gap-10 flex-wrap justify-center'>
      {
        Founders.map((founder) => (
          <Founder
          key={founder.key}
          name={founder.name}
          role={founder.role}
          desc={founder.desc}
          src={founder.src}
          />
        ))
      }
    </div>
   
</section>
  )
}

export default WhoWereBuiltBy