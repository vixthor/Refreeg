import { ChevronDown, ChevronRight } from 'lucide-react'
import React from 'react'
import Dot from './Dot'

const Tile = ({title, content1, content2}) => {
  return (
    <div className='flex flex-col border-b-secondary-2 border-b md:pb-0 pb-[10px]'>
    <div className='flex justify-between md:justify-start items-center py-[15px] md:py-[40px] cursor-pointer w-full'>
        {/* dot  */}
        <div className="flex lg:space-x-6 md: space-x-4 xl:space-x-8 items-center w-full md:min-w-[320px]">

      <Dot size={"size-[20px]"} />

        <p className='text-black text-[18px] font-medium'>{title}</p>

        </div>

<div className='flex space-x-4 justify-between items-center w-fit md:w-full'>

        <div className='space-y-3 text-[13px] text-secondary-4 w-[85%] hidden md:block'>
        <p>{content1}</p>
        <p>{content2}</p>
        </div>
        
        <div className='md:hidden'>
        <ChevronDown />
        </div>

        <div className="hidden text-bold items-center space-x-1  md:flex">
            <p className='underline'>Get Started</p>
            <ChevronRight />
        </div>
</div>




    </div>


    <div className="flex text-bold items-center space-x-1 md:hidden">
            <p className='underline'>Get Started</p>
            <ChevronRight />
        </div>
    </div>
  )
}

export default Tile
