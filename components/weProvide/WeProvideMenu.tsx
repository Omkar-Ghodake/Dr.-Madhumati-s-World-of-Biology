import { SelectedWeProvideMenuType } from '@/types/dataTypes'
import React from 'react'
import { motion } from 'framer-motion'

const WeProvideMenu = ({
  selectedWeProvideMenu,
}: {
  selectedWeProvideMenu: SelectedWeProvideMenuType
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`h-full w-fit flex shadow-xl bg-slate-50 rounded-lg overflow-x-hidden duration-200 
        ${selectedWeProvideMenu === 0 && 'translate-x-0'} 
        ${selectedWeProvideMenu === 1 && '-translate-x-[75vw]'} 
        ${selectedWeProvideMenu === 2 && '-translate-x-[150vw]'}`}
      >
        <div className='menu-0 h-full p-5 w-[75vw]'>
          0 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores officia beatae qui, consectetur laborum recusandae corporis
          unde mollitia? Fugiat, cupiditate! Voluptas nihil nesciunt laudantium
          ullam nam quo repudiandae maxime possimus.
        </div>
        <div className='menu-1 h-full p-5 w-[75vw]'>
          1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores officia beatae qui, consectetur laborum recusandae corporis
          unde mollitia? Fugiat, cupiditate! Voluptas nihil nesciunt laudantium
          ullam nam quo repudiandae maxime possimus.
        </div>
        <div className='menu-2 h-full p-5 w-[75vw]'>
          2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores officia beatae qui, consectetur laborum recusandae corporis
          unde mollitia? Fugiat, cupiditate! Voluptas nihil nesciunt laudantium
          ullam nam quo repudiandae maxime possimus.
        </div>
      </motion.div>
    </>
  )
}

export default WeProvideMenu
