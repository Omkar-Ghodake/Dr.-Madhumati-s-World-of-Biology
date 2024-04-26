'use client'

import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'
import React from 'react'

const ContactFormLogo = () => {
  const { theme } = useTheme()

  return (
    <>
      <Image
        src={`/icons/contact-mail.png`}
        alt=''
        width={90}
        height={70}
        className={`${theme === 'dark' && 'invert'}`}
      />
    </>
  )
}

export default ContactFormLogo
