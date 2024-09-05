import Button from '@/components/shared/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-full h-full md:px-[50px] px-[10px] py-[15px] md:py-[25px] mt-0 md:mt-10' id='about'>
        <div className='relative'>
        <p className='text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold'>About Us.</p>
        <div className='w-[150px] md:w-[250px] h-[8px] rounded-[20px] bg-accent mx-auto' />

        <div className="w-full md:flex justify-between md:space-x-[60px] items-center pt-[76px] pb-[50px]">
          {/* `about images */}
        <div className='md:w-[50%] h-[350px] md:h-[600px] relative rounded'>
          <Image className='w-[60%] h-[80%] absolute rounded-md object-fill' src={"/img1.svg"} width={200} height={200} />
          <Image className='w-[60%] h-[80%] absolute bottom-0 right-0 rounded-md object-fill' src={"/img2.svg"} width={200} height={200} />
        </div>


        {/* about text  */}
        <div className='flex flex-col space-y-2 w-full md:w-[50%]'>
          <div className="flex space-x-6 my-[10px] md:mb-[25px]">
          <Button variant={"filled"} > 
            Mission Statement
          </Button>
          <Button variant={"outline"} > 
            Our Vision
          </Button>
          </div>

        <div className="w-full py-[30px] px-[20px] bg-default text-[15px] rounded-[10px] text-light">
        At RefreeG, our mission is to empower less privileged individuals in African communities through transparent and impactful 
        crowdfunding. We focus on a variety of causes that foster socio-economic growth, such as education, vocational training, 
        healthcare, and aid for victims of gender-based violence. Our mission is to build a better Africa!
        </div>

<div className='pt-[20px]'>
        <Button variant={"text"} > 
            Join Our Community
          </Button>
</div>



        </div>
        </div>
        </div>
        </section> 
  )
}

export default About