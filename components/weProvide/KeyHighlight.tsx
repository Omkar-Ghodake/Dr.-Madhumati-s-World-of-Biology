'use client'

import { useTheme } from '@/context/ThemeProvider'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

const KeyHighlight = ({
  title,
  imgSrc,
}: {
  title: string
  imgSrc: StaticImageData
}) => {
  const { theme } = useTheme()

  return (
    <div className='w-full md:w-1/3 p-4 min-h-64'>
      <div className='w-full p-4 flex flex-col justify-center items-center space-y-5 border rounded-3xl shadow-lg h-full'>
        <div className=''>
          <Image
            src={imgSrc}
            alt=''
            width={100}
            height={100}
            className={`${theme == 'dark' && 'invert'}`}
          />
        </div>

        <p className='text-center text-primary font-semibold text-xl'>{title}</p>
      </div>
    </div>
  )
}

export default KeyHighlight
