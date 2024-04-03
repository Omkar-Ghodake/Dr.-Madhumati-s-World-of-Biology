'use client'

import { useTheme } from '@/context/ThemeState'
import Image from 'next/image'

const NavbarBrand = ({
  width,
  height,
}: {
  width?: number
  height?: number
}) => {
  const { theme } = useTheme()

  return (
    <>
      <Image
        src={'/logo_horiz_light.png'}
        alt=''
        width={width}
        height={height}
        fill={!width || !height}
        className={`${theme === 'light' && 'invert'} z-50`}
      />
    </>
  )
}

export default NavbarBrand
