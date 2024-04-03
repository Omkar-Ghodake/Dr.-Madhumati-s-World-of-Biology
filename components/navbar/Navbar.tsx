'use client'

import { NAVLINKS_LEFT, NAVLINKS_RIGHT } from '@/data/navlinks'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import ActiveNavbar from './ActiveNavbar'
import NavList from './NavList'
import NavbarBrand from './NavbarBrand'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import NavbarToggler from './NavbarToggler'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

  const pathname = usePathname()
  const navRef = useRef(null)

  const toggleNavbar = () => {
    isNavbarOpen ? setIsNavbarOpen(false) : setIsNavbarOpen(true)
  }

  useOnClickOutside(navRef, () => {
    setIsNavbarOpen(false)
  })

  useEffect(() => {
    setIsNavbarOpen(false)
  }, [pathname])

  return (
    <>
      <div className='w-[100vw] h-[10vh] md:hidden flex justify-between items-center px-2'>
        <Link href={'/'} className='navbar-brand mt-0-imp blur-b z-50'>
          <NavbarBrand width={200} height={40} />
        </Link>

        <div className='w-1/2 flex justify-end items-center'>
          <NavbarToggler
            isNavbarOpen={isNavbarOpen}
            toggleNavbar={toggleNavbar}
          />
        </div>
      </div>

      <nav
        className={`absolute left-0 md:static w-full h-full md:h-[12vh] flex flex-col md:flex-row md:justify-center items-center space-y-5 md:space-y-0 px-1 py-10 md:py-0 border-b nav-blur-bg ${
          isNavbarOpen ? '-translate-y-0' : '-translate-y-[100vh]'
        } md:-translate-y-0 duration-300`}
        ref={navRef}
      >
        <div className='left-navlinks md:w-[40vw] flex flex-col md:flex-row items-center justify-center text-lg md:mt-0'>
          <NavList navLinksArray={NAVLINKS_LEFT} />
        </div>

        <Link
          href={'/'}
          className='navbar-brand relative w-[20vw] h-[84%] hidden md:block'
        >
          <NavbarBrand />
        </Link>

        <div className='right-navlinks md:w-[40vw] flex flex-col md:flex-row items-center justify-center text-lg'>
          <NavList navLinksArray={NAVLINKS_RIGHT} />
        </div>

        <ActiveNavbar />
      </nav>
    </>
  )
}

export default Navbar
