'use client'

import { NavItemType } from '@/types/componentTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItem: NavItemType = ({ title, url }) => {
  const pathname = usePathname()

  return (
    <Link
      href={url}
      className={`md:w-[10vw] text-center ${
        pathname === url && 'font-semibold md:font-medium'
      }`}
    >
      {title}
    </Link>
  )
}

export default NavItem
