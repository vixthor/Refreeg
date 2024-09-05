import Button from '@/components/shared/Button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const CTA = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] py-[25px] mt-[200px]'> 
    <div className="w-full rounded-[20px] md:rounded-[60px] py-[20px] md:py-[40px] px-[15px] md:px-[180px] text-center bg-banner text-white space-y-4">
        <p className='text-[30px] font-bold '>Ready to be part of the solution?</p>

        <p>
        Join the RefreeG community and become a RefreeGerian today! By joining us, you contribute to empowering less privileged individuals in African communities, 
        supporting causes that foster socio-economic growth, and promoting sustainable development. Together, we can make a significant impact and create a 
        brighter future for all.
        </p>

<div className='mx-auto w-fit'>
        <Button variant={"outline"}>
            <p>
            Join our Community 
            </p>
            <ArrowRight size={"18"} />
        </Button>
</div>
    </div>
    </section>
  )
}

export default CTA