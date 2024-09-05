import Button from '@/components/shared/Button'
import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] mt-10' id='who-we-are'>
        <div className="w-full md:flex md:flex-row flex flex-col-reverse justify-between md:space-x-[60px] items-center md:pt-[76px] pb-[10px]">

        {/* about text  */}
        <div className='md:w-[50%] w-full'>

         
        <div className='w-fit mb-[20px]'>
        <p className='text-center text-[20px] font-semibold text-dark'>Who are we?</p>
        <div className='w-[90%] mx-auto h-[5px] rounded-[20px] bg-accent' />
        </div>


        <div className="w-full py-[30px] px-[20px] bg-default text-[15px] rounded-[10px] text-light">
        RefreeG is a dedicated crowdfunding platform designed to empower less privileged individuals in African communities by connecting 
        them with compassionate donors. Our mission is to support initiatives that foster socio-economic growth, including education, v
        ocational training, healthcare, and basic necessities. By leveraging blockchain technology, we ensure transparency and trust in 
        the donation process, allowing donors to see the direct impact of their contributions. We are a community-driven platform focused on 
        creating sustainable solutions and empowering individuals to build a better future for themselves and their communities.
        </div>

        <div className='pt-[20px]'>
        <Button variant={"text"} > 
        Join Our Community
        </Button>
        </div>
        </div>


       

            
        {/* `about images */}
        <div className='w-full md:w-[50%] h-[350px] md:h-[600px] relative rounded'>
        <Image className='w-[60%] h-[80%] absolute rounded-md object-fill' src={"/img3.svg"} width={200} height={200} />
        <Image className='w-[60%] h-[80%] absolute bottom-0 right-0 rounded-md object-fill' src={"/img4.svg"} width={200} height={200} />
        </div>

        </div>
    </section>
  )
}

export default WhoWeAre