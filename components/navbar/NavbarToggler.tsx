import React from 'react'
import { Button } from '../ui/button'

const NavbarToggler = ({
  isNavbarOpen,
  toggleNavbar,
}: {
  isNavbarOpen: boolean
  toggleNavbar: () => void
}) => {
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      className={`flex flex-col justify-evenly  items-center z-50`}
      onClick={toggleNavbar}
    >
      <div
        className={`w-[22px] h-[1.5px] bg-black ${
          isNavbarOpen &&
          'rotate-[45deg] w-[25px] h-[2px] translate-y-[6.29px] translate-x-[1px]'
        } duration-150`}
      ></div>

      <div
        className={`w-[22px] h-[1.5px] bg-black ${
          isNavbarOpen && 'hidden'
        } duration-150`}
      ></div>

      <div
        className={`w-[22px] h-[1.5px] bg-black ${
          isNavbarOpen &&
          '-rotate-[45deg] w-[25px] h-[2px] -translate-y-[6.29px] translate-x-[1px]'
        } duration-150`}
      ></div>
    </Button>
  )
}

export default NavbarToggler
