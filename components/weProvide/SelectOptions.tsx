'use client'

import React, { useState } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { SelectedWeProvideMenuType } from '@/types/dataTypes'
import WeProvideMenu from './WeProvideMenu'
import { motion } from 'framer-motion'

const SelectOptions = () => {
  const [selectedWeProvideMenu, setSelectedWeProvideMenu] =
    useState<SelectedWeProvideMenuType>(1)

  return (
    <MaxWidthWrapper
      className='flex justify-center overflow-x-hidden px-0'
      heightPage
    >
      <div className='flex flex-col items-center mt-12 w-full'>
        <div className='flex justify-around w-full h-fit md:text-xl text-center font-semibold'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.03 }}
            className={`opt-1 flex justify-center items-center font-semibold shadow-lg cursor-pointer hover:shadow-xl rounded-full w-24 h-24 md:w-32 md:h-32 ${
              selectedWeProvideMenu === 0
                ? 'bg-primary text-white'
                : 'bg-secondary text-secondary-foreground'
            } duration-150`}
            onClick={() => {
              setSelectedWeProvideMenu(0)
            }}
          >
            <p>11th/12th (Biology)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.03 }}
            className={`opt-2 flex justify-center items-center font-semibold shadow-lg cursor-pointer hover:shadow-xl rounded-full w-24 h-24 md:w-32 md:h-32 ${
              selectedWeProvideMenu === 1
                ? 'bg-primary text-white'
                : 'bg-secondary text-secondary-foreground'
            } duration-150`}
            onClick={() => {
              setSelectedWeProvideMenu(1)
            }}
          >
            <p>NEET (Biology)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.03 }}
            className={`opt-3 flex justify-center items-center font-semibold shadow-lg cursor-pointer hover:shadow-xl rounded-full w-24 h-24 md:w-32 md:h-32 ${
              selectedWeProvideMenu === 2
                ? 'bg-primary text-white'
                : 'bg-secondary text-secondary-foreground'
            } duration-150`}
            onClick={() => {
              setSelectedWeProvideMenu(2)
            }}
          >
            <p>MHT-CET (Biology)</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          className='overflow-x-hidden h-full flex flex-col justify-center items-center w-[90vw] md:w-[75vw] pt-5 rounded-lg'
        >
          <WeProvideMenu selectedWeProvideMenu={selectedWeProvideMenu} />
        </motion.div>
      </div>
    </MaxWidthWrapper>
  )
}

export default SelectOptions
