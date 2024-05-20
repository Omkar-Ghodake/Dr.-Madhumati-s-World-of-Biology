'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import LandingPageBannerImage from '@/public/cover_photo.jpg'

const LandingPageBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className='md:right flex justify-center md:justify-end items-center w-full md:w-1/2 order-1 md:order-2 rounded-3xl mt-10 mb-5 md:my-0'
    >
      <div className='relative w-[20rem] md:w-[35rem] h-[20rem] md:h-[35rem] rounded-3xl'>
        <Image
          src={LandingPageBannerImage}
          alt=''
          fill
          objectFit='cover'
          className='rounded-lg'
          placeholder='blur'
        />
      </div>
    </motion.div>
  )
}

export default LandingPageBanner
