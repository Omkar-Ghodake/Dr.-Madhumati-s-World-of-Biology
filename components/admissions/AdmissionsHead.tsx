'use client'

import React from 'react'
import Image from 'next/image'
import medicalStudent from '@/public/ads/home_ad_banner.jpg'
import { motion } from 'framer-motion'

const AdmissionsHead = () => {
  return (
    <div className='flex flex-col justify-between items-center pt-10 md:pt-[4.5rem] md:space-y-5'>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-center text-2xl md:text-5xl text-primary font-semibold drop-shadow-xl mb-2'
      >
        Confirm Your Seats Now
      </motion.h1>

      <div className='flex flex-col md:flex-row md:justify-between md:space-y-0 md:space-x-10 w-full h-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className='relative h-[30vh] md:h-[45vh] w-full md:w-[46%]'
        >
          <Image
            src={medicalStudent}
            alt=''
            fill
            placeholder='blur'
            // className='object-contain'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className='relative flex justify-center items-center h-[30vh] md:h-[45vh] w-full md:w-[46%]'
        >
          <video controls autoPlay={true} className='w-full h-full'>
            <source src={'/shortVideos/mainVideo.mp4'} />
            Your browser does not support the video tag...
          </video>
        </motion.div>
      </div>
    </div>
  )
}

export default AdmissionsHead
