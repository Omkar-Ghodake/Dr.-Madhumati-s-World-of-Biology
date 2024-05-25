'use client'

import { motion } from 'framer-motion'

const ShortVideos = () => {
  return (
    <div className='w-full overflow-hidden custom-scrollbar p-2 scale-[1.3]'>
      <div className={`flex w-full justify-center space-x-5`}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl select-none'
        >
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo1.mp4'} />
            Your browser does not support the video tag...
          </video>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl select-none'
        >
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo2.mp4'} />
            Your browser does not support the video tag...
          </video>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl select-none'
        >
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo3.mp4'} />
            Your browser does not support the video tag...
          </video>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className='relative w-fit h-[20vh] md:h-[50vh] rounded-xl select-none'
        >
          <video
            controls
            autoPlay={true}
            className='rounded-xl w-full h-[20vh] md:h-[50vh]'
          >
            <source src={'/shortVideos/shortVideo4.mp4'} />
            Your browser does not support the video tag...
          </video>
        </motion.div>
      </div>
    </div>
  )
}

export default ShortVideos
