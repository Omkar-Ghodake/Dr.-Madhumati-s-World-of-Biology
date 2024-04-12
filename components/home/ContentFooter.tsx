'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ContentFooter = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.16 }}
    >
      <span>
        <span className='text-2xl md:text-3xl'>Where </span>
        <i className='text-3xl md:text-4xl border-b-2 border-primary'>
          Curiosity{' '}
        </i>
        <span className='text-2xl md:text-3xl'>Meets </span>
        <i className='text-3xl md:text-4xl border-b-2 border-primary'>
          Discovery{' '}
        </i>
      </span>
      <span>
        <span className='text-2xl md:text-3xl'>in the </span>
        <span className='text-2xl md:text-3xl'>World of </span>
        <i className='text-3xl md:text-4xl border-b-2 border-primary inline-block md:inline'>
          BIOLOGY
        </i>
      </span>
      .
    </motion.span>
  )
}

export default ContentFooter
