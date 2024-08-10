import Image from 'next/image'
import React from 'react'

const HeroComponent = ({img1, img2}) => {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        {/* top or left image  */}
      <div className='border-secondary-1 size-[130px] rounded-full border-4 p-2'>
         <Image
                    src={img1}
                    alt='link'
                    className='rounded-full size-full'
            width={160}
            height={160}    />
      </div>

      <div className='border-l-secondary-2 border-l-2 w-[1px] h-[60px]' />

            {/* link image  */}
            <div>
                <Image
                    src={"/herolink.svg"}
                    alt='link'
                    className=' my-3'
            width={40}
            height={30}    />
            </div>


            <div className='border-l-secondary-2 border-l-2 w-[1px] h-[60px]' />

            {/* top or left image  */}
            <div className='border-secondary-1 size-[130px] rounded-full border-4 p-2'>
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
