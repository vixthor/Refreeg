import { navLinks } from '@/constants'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className='sticky top-0 w-full px-[50px] py-[5px] flex justify-between items-center'>
          <Link href={"/"}>
              <Image className='w-[80px] h-[60px]'
                  src={"/logo.png"}
                  alt='logo'
                  width={100}
                  height={100}
              />
                  </Link>

              <nav className='space-x-[40px] flex items-center'>
                  {navLinks.map((nav) => (
                      <a key={nav.route} href={`#${nav.route}`} className='text-baseline-1'>{nav.label}</a>
                  ))}
              <button className='flex gap-[6px] bg-[#036] py-[10px] px-[15px] rounded-[8px] text-white text-[15px] items-center justify-center font-semibold'>Our Community
                  <ArrowRight size={"18"} />
          </button>
          </nav>

    </header>
  )
}

export default Header
