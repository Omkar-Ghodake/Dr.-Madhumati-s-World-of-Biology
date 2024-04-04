'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const ActiveNavbar = () => {
  const pathname = usePathname()

  return (
    <div
      className={`absolute bottom-0 w-[10vw] h-[2px] bg-primary duration-300 hidden md:block
      ${pathname === '/' && 'md:left-[0vw] md:top-full'}
      ${pathname === '/we-provide' && 'md:left-[10vw] md:top-full'}
      ${pathname === '/about-us' && 'md:left-[20vw] md:top-full'}
      ${pathname === '/why-us' && 'md:left-[30vw] md:top-full'}
      ${pathname === '/gallery/photos' && 'md:left-[60vw] md:top-full'}
      ${pathname === '/gallery/videos' && 'md:left-[70vw] md:top-full'}
      ${pathname === '/testimonials' && 'md:left-[80vw] md:top-full'}
      ${pathname === '/contact-us' && 'md:left-[90vw] md:top-full '}
      `}
    ></div>
  )
}

export default ActiveNavbar
