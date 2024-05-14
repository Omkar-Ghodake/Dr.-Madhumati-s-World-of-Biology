'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from '@/context/ThemeProvider'

const NavbarToggler = ({
  isNavbarOpen,
  toggleNavbar,
}: {
  isNavbarOpen: boolean
  toggleNavbar: () => void
}) => {
  const { theme } = useTheme()

  return (
    <Button
      variant={'outline'}
      size={'icon'}
      className={`flex flex-col justify-evenly items-center z-50 border-primary/35`}
      onClick={toggleNavbar}
    >
      <div
        className={`w-[22px] h-[1.5px] bg-primary ${
          isNavbarOpen &&
          'rotate-[45deg] w-[25px] h-[2px] absolute'
        } duration-150`}
      ></div>

      <div
        className={`w-[22px] h-[1.5px] bg-primary ${
          isNavbarOpen && 'bg-transparent'
        } duration-150`}
      ></div>

      <div
        className={`w-[22px] h-[1.5px] bg-primary ${
          isNavbarOpen &&
          '-rotate-[45deg] w-[25px] h-[2px] absolute'
        } duration-150`}
      ></div>
    </Button>
  )
}

export default NavbarToggler
