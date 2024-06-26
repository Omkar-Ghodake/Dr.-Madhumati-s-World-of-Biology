'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import AdmissionsHead from '@/components/admissions/AdmissionsHead'
import ShortVideos from '@/components/admissions/ShortVideos'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Admissions = () => {
  return (
    <MaxWidthWrapper className='flex flex-col justify-between space-y-20 p-0'>
      <div className='h-[80vh] md:h-[83vh] flex flex-col justify-between'>
        <AdmissionsHead />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex justify-center items-center'
        >
          <Button size={'lg'} className='text-xl font-semibold' asChild>
            <Link className='' href={'/contact-us'}>
              Contact for Admission
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className='flex flex-col space-y-14 min-h-[45vh]'>
        <h1 className='text-center text-4xl font-semibold'>
          Watch Our Video Shorts
        </h1>

        <div className='h-[60vh]'>
          <ShortVideos />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Admissions
