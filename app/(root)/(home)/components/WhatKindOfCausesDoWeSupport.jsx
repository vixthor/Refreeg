import Button from '@/components/shared/Button'
import Tile from '@/components/shared/Tile'
import { Causes } from '@/constants'
import React from 'react'

const WhatKindOfCausesDoWeSupport = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] py-[25px] mt-10' id='about'>
        <div className='flex items-center justify-between'>
            <p className='text-bold text-[15px] font-semibold md:font-semibold w-fit mx-auto md:mx-0'>What kind of causes do we support?</p>
            <div className='hidden md:block'>
            <Button variant={"outline"} > Join Us Today!</Button>
            </div>
        </div>

        <p className='text-[16px] text-typo mx-auto text-center md:l-[90%] lg:w-[65%] my-5 md:my-8'>At RefreeG, we support a wide range of causes that align with our mission to empower less privileged individuals 
            in the community and foster socio-economic growth. Here are some of the key areas we focus on</p>

            {Causes.map((cause) => (
            <Tile
            key={cause.title}
            title={cause.title}
            content1={cause.content1}
            content2={cause.content2}
            />
            ))}
    </section>
  )
}

export default WhatKindOfCausesDoWeSupport