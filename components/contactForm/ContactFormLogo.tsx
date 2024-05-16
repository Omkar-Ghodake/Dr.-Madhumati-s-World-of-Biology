'use client'

import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'
import React from 'react'

const ContactFormLogo = () => {
  const { theme } = useTheme()

  return (
    <>
      <Image
        src={`/icons/social/mail.svg`}
        alt=''
        width={30}
        height={30}
        className={`${theme === 'dark' && 'invert'}`}
      />
    </>
  )
}

export default ContactFormLogo
