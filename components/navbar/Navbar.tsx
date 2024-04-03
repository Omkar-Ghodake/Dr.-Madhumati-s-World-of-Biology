'use client'

import { NAVLINKS_LEFT, NAVLINKS_RIGHT } from '@/data/navlinks'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import ActiveNavbar from './ActiveNavbar'
import NavList from './NavList'
import NavbarBrand from './NavbarBrand'

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

  const toggleNavbar = () => {
    isNavbarOpen ? setIsNavbarOpen(false) : setIsNavbarOpen(true)
  }

  return (
    <>
      <Link
        href={'/'}
        className='navbar-brand absolute inset-0 w-[100vw] h-[10vh] md:hidden mt-0-imp blur-bg z-50 flex justify-between items-center px-2'
      >
        <NavbarBrand width={200} height={40} />

        <Button variant={'outline'} size={'icon'} onClick={toggleNavbar}>
          {isNavbarOpen ? <X /> : <Menu />}
        </Button>
      </Link>

      <nav
        className={`w-full h-full md:h-[12vh] flex flex-col md:flex-row md:justify-center items-center space-y-5 md:space-y-0 px-1 pb-10 pt-7 md:py-0 border-b nav-blur-bg ${
          isNavbarOpen ? '-translate-y-0' : '-translate-y-[100vh]'
        } md:-translate-y-0 duration-300`}
      >
        <div className='left-navlinks h-[full] w-[40vw] flex flex-col md:flex-row items-center justify-center text-lg mt-20 md:mt-0'>
          <NavList navLinksArray={NAVLINKS_LEFT} />
        </div>

        <Link
          href={'/'}
          className='navbar-brand relative w-[20vw] h-[84%] hidden md:block'
        >
          <NavbarBrand />
        </Link>

        <div className='right-navlinks h-full w-[40vw] flex flex-col md:flex-row items-center justify-center text-lg'>
          <NavList navLinksArray={NAVLINKS_RIGHT} />
        </div>

        <ActiveNavbar />
      </nav>
    </>
  )
}

export default Navbar
