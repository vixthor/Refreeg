import GetMail from '@/components/shared/GetMail'
import { contactLinks, legalLinks, quickLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section className='w-full h-full px-[10px] md:px-[50px] py-[25px] mt-[30px] bg-footer'>
        <div className='md:flex md:space-x-3 space-y-4 md:space-y-0'>
          <div className="w-full md:w-3/6">
          <p className='font-semibold text-[18px] mb-2'>Subscribe</p>
          <p className='text-[15px] font-light'>Join our newsletter to stay up to date on features <br />
          and releases</p>
          <GetMail />
          <p className='text-[10px] mt-3'>By Subscribing you agree with our <span className='text-bold font-medium underline'>
          Privacy policy</span> </p>
          </div>

          <div className="w-full md:w-1/6">
          <p className='font-medium text-[15px]'>Quick Links</p>
          <div className='flex flex-col space-y-3 pt-4'>
          {quickLinks.map((link) => (
            <a className='underline font-light text-[15px] text-dark cursor-pointer' href={link.route} key={link.key}>{link.label}</a>
          ))}
          </div>
          </div>

          <div className="w-full md:w-2/6">
          <p className='font-medium text-[15px]'>Contact Us</p>
          <div className='flex flex-col space-y-3 pt-4'>
          {contactLinks.map((link) => (
            <a className='underline font-light text-[15px] text-dark cursor-pointer' href={link.route} key={link.key}>{link.label}</a>
          ))}
          </div>
          </div>

          <div className="w-full md:w-1/6">
          <p className='font-medium text-[15px]'>Legal</p>
          <div className='flex flex-col space-y-3 pt-4'>
          {legalLinks.map((link) => (
            <a className='underline font-light text-[15px] text-dark cursor-pointer' href={link.route} key={link.key}>{link.label}</a>
          ))}
          </div>
          </div>

        </div>
        <hr  className='border-[#A6A6A6] my-[30px]'/>
        <div className='md:flex md:justify-between w-full'>
            <p className='text-[13px] text-center md:text-left mb-2 md:mb-0'>
            Copyright © 2024 <span className='text-bold font-medium underline'>
            Eiza Innovations.
                </span> All Rights Reserved.
            </p>

            <div className='mx-auto md:mx-0 flex space-x-3 items-center w-fit md:justify-normal'>
            <Image src={"/facebook.png"} className='size-[30px]' alt='facebook social' width={50} height={50} />
            <Image src={"/ig.png"} className='size-[30px]' alt='ig social' width={50} height={50} />
            <Image src={"/x.png"} className='size-[30px]' alt='x social' width={50} height={50} />
            </div>
        </div>
    </section>
  )
}

export default Footer