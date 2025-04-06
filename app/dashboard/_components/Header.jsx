"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path);
    })
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/logo.svg'} alt='logo' width={88} height={88}/>
        <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' ? 'text-primary font-black text-xl' : ''}`}>
  <h2 className="text-xl font-black">Dashboard</h2>
</li>
        </ul>
        <UserButton/>
    </div>
  )
}
