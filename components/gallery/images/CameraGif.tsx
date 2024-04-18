'use client'

import { useTheme } from '@/context/ThemeState'
import Image from 'next/image'
import React from 'react'

const CameraGif = () => {
  const { theme } = useTheme()

  return (
    <Image
      src={'/camera.gif'}
      alt=''
      width={60}
      height={40}
      className={`${theme === 'dark' && 'invert'}`}
    />
  )
}

export default CameraGif
