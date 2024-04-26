import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const ActiveImage = ({
  selectedImage,
  setSelectedImage,
  getNextImage,
  getPreviousImage,
}: {
  selectedImage: {
    src: StaticImageData | null
    imgTitle: string | null
  }
  setSelectedImage: Dispatch<
    SetStateAction<{
      src: StaticImageData | null
      imgTitle: string | null
    }>
  >
  getNextImage: () => void
  getPreviousImage: () => void
}) => {
  return (
    selectedImage.src && (
      <div className='fixed inset-0 z-50 bg-black/80 text-white flex justify-center items-center select-none'>
        <X
          className='absolute text-white top-5 right-5  md:top-20 md:right-32 cursor-pointer z-50 hover:scale-125 duration-150'
          onClick={() => {
            setSelectedImage({ imgTitle: null, src: null })
          }}
        />

        <div
          className='cursor-pointer scale-150 hover:bg-slate-50/30 p-2 rounded-full duration-150 mr-5'
          onClick={getPreviousImage}
        >
          <ChevronLeft />
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='relative w-2/3 h-2/3 rounded-xl'
        >
          <Image
            src={selectedImage.src}
            alt='lorem'
            className='object-contain rounded-xl'
            fill
          />
        </motion.div>

        <div
          className='cursor-pointer scale-150 hover:bg-slate-50/30 p-2 rounded-full duration-150 ml-5'
          onClick={getNextImage}
        >
          <ChevronRight className='' />
        </div>
      </div>
    )
  )
}

export default ActiveImage