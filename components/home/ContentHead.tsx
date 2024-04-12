'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ContentHead = () => {
  return (
    <>
      <motion.i initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        WELCOME TO
      </motion.i>
    </>
  )
}

export default ContentHead
