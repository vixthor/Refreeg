import React from 'react'
import Button from './shared/Button'

const Banner = ({title, children, bg, footer}) => {
  return (
    <section className='w-full h-full mt-10 py-[50px] md:py-[200px]'>
        
    <div className={`md:py-[120px] py-[40px] px-[25px] md:px-[50px] ${bg}`}>
        <p className='text-[20px] font-semibold text-light'>{title}</p>
        <div className='text-[15px] text-light pt-[40px]'>
        {children}
        </div>
      

        {!footer && (
            <div className="md:flex md:space-x-3 md:items-center">
                <p className='text-light'>Want to be part of us?</p>
            <Button variant={"textwhite"}>
                Join Our Community
            </Button>
            </div>
        )

        }
    </div>
</section>
  )
}

export default Banner