import HeroComponent from '@/components/shared/HeroComponent'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <section className='w-full px-[50px] py-[25px] flex justify-between relative h-[600px]' id='home'>
        {/* african map  */}
          <Image
              src={"/map.svg"}
              alt='African Map'
              width={100}
              height={100}
              className='w-[600px] absolute left-1/2 transform -translate-x-1/2'
          />

          <div className=''><HeroComponent img1={"/heropic1.png"} img2={"/heropic2.png"} /></div>
          {/* hero caption  */}
          <div className='pt-10 text-center'>
              <p className='text-[14px] font-semibold text-center text-baseline-2'>Building Africa’s number 1 crowd funding platform.</p>
              <p className='text-[100px] font-semibold text-accent'>RefreeG</p>
              <p className='text-[20px]  text-baseline font-medium'>Your go to crowdfunding platform for building a new <br /> Africa, one community at a time</p>

              <button className='flex gap-[6px] bg-light py-[10px] px-[15px] rounded-[8px] text-bold text-[15px] items-center justify-center mx-auto relative z-30 mt-16 font-semibold'>Join our Community
                  <ArrowRight size={"18"} />
          </button>
          </div>

        <div className=''><HeroComponent img1={"/heropic3.png"} img2={"/heropic4.png"} /></div>
    </section>
  )
}

export default Hero
