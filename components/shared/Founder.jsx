import Image from 'next/image'
import React from 'react'

const Founder = ({name, role, desc, src}) => {
  return (
    <div className='w-[300px] text-center'>
        <div>
        <div className='mx-auto bg-cardbg max-w-[250px] h-[300px] rounded-[150px] overflow-hidden'>
        <Image
        src={src}
        className='mx-auto w-full h-full object-cover object-top'
        width={200}
        height={200}
        />
        </div>
        <p className='text-[15px] font-semibold mt-[5px]'>{name}</p>
        <p className='text-[13px] '>{role}</p>
        <p className='text-[9px] line-clamp-3'>{desc}</p>
        </div>
    </div>
  )
}

export default Founder