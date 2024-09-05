import Button from '@/components/shared/Button'
import Dot from '@/components/shared/Dot'
import { WhoIs } from '@/constants'
import Image from 'next/image'
import React from 'react'

const WhoIsARefreegerian = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] py-[25px] mt-10'>
    <div>
    <div className="w-fit mx-auto">
    <p className='text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold'>Who is a Refreegerian?</p>
    <div className='w-full md:w-[200px] h-[8px] rounded-[20px] bg-accent mx-auto' />
    </div>
    </div>


    <div className="md:flex  md:flex-row flex flex-col-reverse justify-between pt-[80px] items-center">
        <div className='md:w-3/5 w-full'>
        <div className="md:w-[80%] w-full">
            <p className='text-[16px] font-semibold mb-1'>Refreegerian, that’s a mouthful isn’t it ?😆 Let me tell you all about it!</p>
            <p className='text-[15px] mb-2'>A RefreeGerian is a compassionate and proactive member of the RefreeG community dedicated to making a positive 
                impact in Africa. These individuals are committed to:</p>

                <div className="list space-y-3 mb-6">
                    {
                        WhoIs.map((item) => (
                <div className="flex items-center space-x-4" key={item.key}>
                    <Dot size={"size-[15px]"} />
                    <p className='text-[15px] mb-2'>
                    {item.list}
                    </p>
                </div>
                        ))
                    }
                </div>

                <Button variant={"text"}> 
                Become a Refreegerian today!
                </Button>
        </div>
        </div>
        
        <div className='w-[2/5] mb:pb-0 pb-4'>
            <Image 
            src={"/side.png"}
            className='w-[300px]'
            width={200}
            height={200}

            />
        </div>
    </div>

</section>
  )
}

export default WhoIsARefreegerian