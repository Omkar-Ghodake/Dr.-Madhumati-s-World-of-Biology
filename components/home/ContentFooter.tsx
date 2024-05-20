'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { CircleArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'

const ContentFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.16 }}
      className='flex flex-col justify-center items-center md:space-x-10 space-y-5 text-3xl'
    >
      <div className='hidden md:block'>
        <span>
          <span className='text-3xl'>Where, </span>
          <span className='text-4xl italic underline decoration-primary text-center'>
            Curiosity{' '}
          </span>
          <span className='text-3xl'>Meets </span>
          <span className='text-4xl italic underline decoration-primary text-center'>
            Discovery{' '}
          </span>
          <span className='text-3xl'>in the World of </span>
          <span className='text-4xl italic underline decoration-primary text-center'>
            Biology{' '}
          </span>
          {/* <span>Discovery</span> */}
        </span>
      </div>

      <Button size={'lg'} className='text-xl font-semibold' asChild>
        <Link className='' href={'/we-provide'}>
          DISCOVER MORE
        </Link>
      </Button>
      {/* <span className='bg-secondary rounded-full shadow-lg cursor-pointer hover:bg-primary duration-150 scale-150 rotate-45 p-2'>
        <CircleArrowOutUpRight />
      </span> */}
    </motion.div>
  )
}

export default ContentFooter
