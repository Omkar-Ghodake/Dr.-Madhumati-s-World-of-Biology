'use client'

import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'
import React from 'react'

const ContactFormLogo = () => {
  const { theme } = useTheme()

  return (
    <>
      <Image
        src={`/${theme === 'light' ? 'logo_dark.png' : 'logo_light.png'}`}
        alt=''
        width={90}
        height={70}
      />
    </>
  )
}

export default ContactFormLogo
