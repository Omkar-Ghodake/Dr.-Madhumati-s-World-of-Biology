'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from '@/context/ThemeState'

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
          'rotate-[46.5deg] w-[25px] h-[2px] translate-y-[6.29px] translate-x-[1px]'
        } duration-150`}
      ></div>

      <div
        className={`w-[22px] h-[1.5px] bg-primary ${
          isNavbarOpen && 'hidden'
        } duration-150`}
      ></div>

      <div
        className={`w-[22px] h-[1.5px] bg-primary ${
          isNavbarOpen &&
          '-rotate-[46.5deg] w-[25px] h-[2px] -translate-y-[6.29px] translate-x-[1px]'
        } duration-150`}
      ></div>
    </Button>
  )
}

export default NavbarToggler
