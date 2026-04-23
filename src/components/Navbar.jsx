'use client'
import { navbarLinks } from '@/data/data'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <div className='flex items-center justify-between gap-7 container max-w-7xl mx-auto  py-4'>
      
      <div className='flex items-center gap-6 font-bold '>
        <div className='lg:hidden'onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        {
           isMenuOpen ? <X /> : <MenuIcon />
        }
       
      </div>
       <Link href="/">
        <h1 className=' text-2xl lg:text-4xl text-white'>Vastu</h1></Link>
      </div>
    <div className='hidden lg:flex items-center justify-center gap-10 '>
        {
            navbarLinks.map((item,index)=>(
               <Link key={index} href={item.link} className='' onClick={()=>setIsMenuOpen(false)}>
                {item.name}
               </Link>
            ))
        }
    </div>
    </div>
    {
      isMenuOpen && (
        <div className='bg-green-950 z-9999 flex flex-col lg:hidden items-center justify-between gap-6 py-10 text-xl w-full absolute top-16 left-0 border-t border-white/20'>
          {
            navbarLinks.map((item,index)=>(
              <Link key={index} href={item.link} className='text-green-100'>
                {item.name}
              </Link>
            ))
          }
        </div>
      )
    }
    </>
  )
}

export default Navbar