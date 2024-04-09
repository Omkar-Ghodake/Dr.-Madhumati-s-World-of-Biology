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
import { useTheme } from '@/context/ThemeState'

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

  const pathname = usePathname()
  const navRef = useRef(null)
  const { theme } = useTheme()

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
      <div className='fixed top-0 left-0 w-[100vw] h-[10vh] blur-bg border-b border-primary/80 shadow-lg md:hidden flex justify-end items-center px-2 z-50'>
        <Link
          href={'/'}
          className={`navbar-brand fixed top-1 left-2 mt-0-imp z-50 bg-mono rounded-full border-b p-2 border-b-primary`}
        >
          <NavbarBrand width={80} height={80} />
        </Link>

        <div className='w-1/2 flex justify-end items-center'>
          <NavbarToggler
            isNavbarOpen={isNavbarOpen}
            toggleNavbar={toggleNavbar}
          />
        </div>
      </div>

      <nav
        className={`absolute left-0 md:fixed md:left-0 md:top-0 w-full h-fit md:h-[12vh] flex flex-col md:flex-row md:justify-center items-center space-y-5 md:space-y-0 px-1 py-5 md:py-0 border-b nav-blur-bg ${
          isNavbarOpen ? '-translate-y-0' : '-translate-y-[120vh]'
        } md:-translate-y-0 duration-300 z-40`}
        ref={navRef}
      >
        <div className='left-navlinks md:w-[40vw] flex flex-col md:flex-row items-center justify-center text-lg md:mt-0 md:mr-[20vw]'>
          <NavList navLinksArray={NAVLINKS_LEFT} />
        </div>

        <div className='hidden md:block fixed top-0 w-36 h-36 bg-white p-2 rounded-full shadow-xl'>
          <Link
            href={'/'}
            className='hidden md:block md:navbar-brand relative w-32 h-32 rounded-full'
          >
            <NavbarBrand />
          </Link>
        </div>

        <div className='right-navlinks md:w-[40vw] flex flex-col md:flex-row items-center justify-center text-lg'>
          <NavList navLinksArray={NAVLINKS_RIGHT} />
        </div>

        <ActiveNavbar />
      </nav>
    </>
  )
}

export default Navbar
