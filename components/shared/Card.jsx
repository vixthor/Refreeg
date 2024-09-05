import Image from 'next/image';
import React from 'react'

const Card = ({ variant, onClick, src, title, content }) => {
    let className = '';
    let icon = null;



  switch (variant) {
    case 'filled':
      className = 'py-[12px] px-[10px] text-[16px] text-light w-[350px] h-[280px] bg-bold rounded-[10px] cursor-pointer mb-10';
      break;
    case 'outline':
      className = 'p-[15px] text-[16px] text-dark w-[350px] h-[280px] bg-light border-bold border rounded-[10px] cursor-pointer mb-10';
      break;
    default:
      className = 'btn-default';
  }
  return (
    <div className={className}>
        <Image
        className='size-[100px] mx-auto bg-white p-2 rounded-lg'
        src={src}
        width={100}
        height={100}
        />
        <p className='font-semibold mt-3  mb-6 text-[16px] text-center'> {title}</p>

        <p className="text-center text-[14px]">
        {content}
        </p>
    </div>
  )
}

export default Card
