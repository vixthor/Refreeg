import Image from 'next/image'
import React from 'react'

const HeroComponent = ({img1, img2}) => {
    return (
      <div className='w-full h-full flex md:flex-col md:justify-start items-center pt-[20px] md:pt-[100px]'>
        {/* top or left image  */}
      <div className='border-secondary-1 w-[250px]  md:size-[130px] rounded-full border-2 md:border-4 p-1 md:p-2'>
         <Image
                    src={img1}
                    alt='link'
                    className='rounded-full size-full'
            width={160}
            height={160}    />
      </div>

      <div className='border-l-secondary-2 border-l-2 w-[1px] h-[60px] hidden md:block ' />
      <div className='border-b-secondary-2 border-b-2 w-full h-[1px] block md:hidden ' />

            {/* link image  */}
            <div>
                <Image
                    src={"/herolink.svg"}
                    alt='link'
                    className='md:my-3 mr-3 md:mx-0 md:rotate-0 rotate-90 size-16'
            width={40}
            height={30} 
            />
            </div>


            <div className='border-l-secondary-2 border-l-2 w-[1px] h-[60px] hidden md:block ' />
      <div className='border-b-secondary-2 border-b-2 w-full h-[1px] block md:hidden ' />

            {/* top or right image  */}
            <div className='border-secondary-1 w-[250px] md:size-[130px] rounded-full border-2 md:border-4 p-1 md:p-2'>
            <Image
                    src={img2}
                    alt='link'
                    className='rounded-full size-full'
            width={160}
            height={160}    />
      </div>
      </div>
  )
}

export default HeroComponent
