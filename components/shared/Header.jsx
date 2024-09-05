"use client"

import { navLinks } from '@/constants'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <header className='sticky top-0 w-full px-[10px] md:px-[50px] py-[5px] flex justify-between items-center backdrop-blur-md z-50'>
          <Link href={"/"}>
              <Image className='md:w-[80px] w-[65px] md:h-[60px] h-[50px]'
                  src={"/logo.png"}
                  alt='logo'
                  width={100}
                  height={100}
              />
                  </Link>

              <nav className='space-x-[40px] hidden items-center md:flex'>
                  {navLinks.map((nav) => (
                      <a key={nav.route} href={`#${nav.route}`} className='text-baseline-1'>{nav.label}</a>
                  ))}
              <button className='flex gap-[6px] bg-[#036] py-[10px] px-[15px] rounded-[8px] text-white text-[15px] items-center justify-center font-semibold'>Our Community
                  <ArrowRight size={"18"} />
          </button>
          </nav>

          <nav className='md:hidden'>
          <Menu onClick={onOpen} className='size-[40px]' />
          <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerHeader borderBottomWidth='1px' className='flex justify-between items-center'>
            <p>Menu</p>
            <X onClick={onClose} />
        </DrawerHeader>
          <DrawerBody className='flex flex-col space-y-2 '>
          {navLinks.map((nav) => (
                      <a key={nav.route} href={`#${nav.route}`} onClick={onClose} className='text-baseline-1 border-none outline-none'>{nav.label}</a>
                  ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
          </nav>



    </header>
  )
}

export default Header
