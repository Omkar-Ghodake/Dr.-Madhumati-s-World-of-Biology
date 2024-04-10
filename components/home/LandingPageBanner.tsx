'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import LandingPageBannerImage from '@/public/landing_page_banner_img.png'

const LandingPageBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className='md:right flex justify-center items-center w-full md:w-[40%] order-1 md:order-2 rounded-lg mt-5 md:mt-0'
    >
      <div className='relative w-[12rem] md:w-[37rem] h-[12rem] md:h-[30rem] rounded-lg shadow-lg'>
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
