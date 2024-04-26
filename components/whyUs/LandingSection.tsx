'use client'

import { motion } from 'framer-motion'
import { CircleArrowOutDownLeft } from 'lucide-react'
import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'

const LandingSection = () => {
  return (
    <MaxWidthWrapper className='pt-16 min-h-[80vh]'>
      <div className='flex flex-col justify-center h-[75vh] space-y-14'>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='text-center text-6xl capitalize font-bold drop-shadow-lg'
        >
          Wondering why choose us?
        </motion.h1>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='text-center text-secondary-foreground font-medium tracking-wide leading-10'
        >
          <p className='w-4/5 mx-auto'>
            <span className='text-3xl'>Discover Why</span>{' '}
            <span className='text-5xl text-primary font-semibold'>
              {' '}
              Dr. Madhutmati&apos;s World of Biology{' '}
            </span>
            <span className='text-3xl'>Is the Top Pick for </span>{' '}
            <span className='text-5xl text-primary font-semibold'>
              Aspiring Biologists
            </span>
            <span>.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='flex flex-col justify-center items-center space-y-2'
        >
          <p className='text-2xl font-medium'>DISCOVER WITH US</p>
          <Link href={'#whyUsInfographicsSection'} className='duration-150'>
            <button className='w-fit mx-auto text-2xl font-semibold bg-secondary/60 hover:bg-secondary p-10 rounded-full shadow-md hover:shadow-lg active:bg-primary/70 duration-150'>
              {/* DISCOVER WITH US */}
              <CircleArrowOutDownLeft className='-rotate-45 scale-125' />
            </button>
          </Link>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  )
}

export default LandingSection
