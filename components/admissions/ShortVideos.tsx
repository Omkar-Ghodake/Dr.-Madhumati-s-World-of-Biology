'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ShortVideos = () => {
  const [isVideoActive, setIsVideoActive] = useState(1)

  useEffect(() => {
    console.log('isVideoActive: ', isVideoActive)
  }, [])

  return (
    <div className='md:pt-5'>
      <div className='w-full snap-x snap-mandatory overflow-hidden overflow-x-scroll md:overflow-x-hidden scrollbar-sm p-2 md:scale-[1.3]'>
        <div className='flex w-fit md:w-full justify-center space-x-5'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='snap-always snap-center relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none'
            id='video1'
          >
            <video
              controls
              autoPlay={true}
              className='rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black'
            >
              <source src={'/admissionsVids/main.mp4'} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className='snap-always snap-center relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none'
            id='video2'
          >
            <video
              controls
              autoPlay={true}
              className='rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black'
            >
              <source src={'/shortVideos/shorts1.mp4'} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='snap-always snap-center relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none'
            id='video3'
          >
            <video
              controls
              autoPlay={true}
              className='rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black'
            >
              <source src={'/shortVideos/shorts2.mp4'} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 25 }}
            transition={{ delay: 0.4 }}
            className='snap-always snap-center relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none'
            id='video4'
          >
            <video
              controls
              autoPlay={true}
              className='rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black'
            >
              <source src={'/shortVideos/shorts3.mp4'} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center items-center md:hidden'>
        <a
          href='#video1'
          onClick={() => {
            setIsVideoActive(1)
          }}
        >
          <div
            className={`${
              isVideoActive == 1
                ? 'w-[2rem] bg-primary'
                : 'w-[.7rem] bg-secondary'
            } h-[.7rem] rounded-full mx-2`}
          ></div>
        </a>
        <a
          href='#video2'
          onClick={() => {
            setIsVideoActive(2)
          }}
        >
          <div
            className={`${
              isVideoActive == 2
                ? 'w-[2rem] bg-primary'
                : 'w-[.7rem] bg-secondary'
            } h-[.7rem] rounded-full mx-2`}
          ></div>
        </a>
        <a
          href='#video3'
          onClick={() => {
            setIsVideoActive(3)
          }}
        >
          <div
            className={`${
              isVideoActive == 3
                ? 'w-[2rem] bg-primary'
                : 'w-[.7rem] bg-secondary'
            } h-[.7rem] rounded-full mx-2`}
          ></div>
        </a>
        <a
          href='#video4'
          onClick={() => {
            setIsVideoActive(4)
          }}
        >
          <div
            className={`${
              isVideoActive == 4
                ? 'w-[2rem] bg-primary'
                : 'w-[.7rem] bg-secondary'
            } h-[.7rem] rounded-full mx-2`}
          ></div>
        </a>
      </div>
    </div>
  )
}

export default ShortVideos
