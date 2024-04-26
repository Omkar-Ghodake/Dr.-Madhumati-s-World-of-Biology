'use client'

import { motion } from 'framer-motion'
import { CircleArrowOutDownLeft } from 'lucide-react'
import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'

const LandingSection = () => {
  return (
    <MaxWidthWrapper className='pt-10 md:pt-24 2xl:pt-16 min-h-[90vh] md:min-h-[80vh]'>
      <div className='flex flex-col justify-center h-[85vh] md:h-[75vh] space-y-2 md:space-y-10 2xl:space-y-14'>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='text-center text-4xl md:text-6xl capitalize font-semibold md:font-bold drop-shadow-lg'
        >
          Wondering why choose us?
        </motion.h1>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='text-center text-secondary-foreground font-medium tracking-wide leading-10'
        >
          <div className='md:w-4/5 mx-auto flex flex-col justify-between items-center space-y-2'>
            <p className='text-[1.7rem]'>Discover Why</p>{' '}
            <p className='text-[2.3rem] md:text-5xl text-primary font-semibold drop-shadow-lg'>
              {' '}
              Dr. Madhutmati&apos;s World of Biology{' '}
            </p>
            <p className='text-[1.7rem]'>Is the Top Pick for</p>{' '}
            <p className='text-[2.3rem] md:text-5xl text-primary font-semibold drop-shadow-lg'>
              Aspiring Biologists
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='flex flex-col justify-center items-center space-y-2'
        >
          <p className='text-lg md:text-2xl font-medium'>DISCOVER WITH US</p>
          <Link href={'#whyUsInfographicsSection'} className='duration-150'>
            <button className='w-fit mx-auto text-2xl font-semibold bg-secondary/60 hover:bg-secondary p-5 md:p-10 rounded-full shadow-md hover:shadow-lg active:bg-primary/70 duration-150'>
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
