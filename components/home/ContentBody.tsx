'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ContentBody = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.08 }}
    >
      <span className=''>
        <span className='text-4xl md:text-5xl'>Dr. </span>
        <span className='text-4xl md:text-5xl'>Madhutmati&apos;s</span>
      </span>

      <br />

      <span className='text-5xl md:text-[4.8rem] text-primary'>
        World of Biology
      </span>
    </motion.span>
  )
}

export default ContentBody