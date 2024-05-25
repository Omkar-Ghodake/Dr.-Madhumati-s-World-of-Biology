'use client'
import { motion } from 'framer-motion'
import { MoveRight, X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const PopUpAd = ({
  adImgSrc,
  redirectTo,
  redirectionText,
}: {
  adImgSrc: StaticImageData
  redirectTo: string
  redirectionText: string
}) => {
  const [showAd, setShowAd] = useState<boolean | null>(null)

  const closeAd = () => {
    setShowAd(false)
    sessionStorage.setItem('homePageAd', 'off')
  }

  useEffect(() => {
    sessionStorage.getItem('homePageAd') !== 'off' && setShowAd(true)
  }, [])

  return (
    <motion.div
      className={`fixed flex flex-col justify-center items-center h-[100vh] w-[100vw] inset-0 space-y-10  bg-black/80 z-50 overflow-hidden ${
        !showAd && 'hidden'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showAd ? 1 : 0 }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showAd ? 1 : 0, opacity: showAd ? 1 : 0 }}
        className='absolute top-36 right-5 md:top-10 md:right-28 text-4xl text-white md:w-fit md:h-fit cursor-pointer hover:scale-125 duration-150 hover:bg-slate-50/20 rounded-full p-1 border border-white/5'
        onClick={closeAd}
      >
        <X />
      </motion.div>

      <motion.div
        className='relative w-[90%] md:w-1/2 h-1/3 md:h-3/4 flex justify-center items-start md:items-center mt-[25vh] md:mt-0'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showAd ? 1 : 0, opacity: showAd ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <Image
          src={adImgSrc}
          alt=''
          fill
          className='object-contain'
          placeholder='blur'
        />
      </motion.div>

      {redirectTo && (
        <motion.div>
          <Button
            size={'lg'}
            variant={'link'}
            className='text-2xl font-medium'
            asChild
          >
            <Link href={redirectTo}>
              {redirectionText || 'Open'} <MoveRight className='ml-3' />
            </Link>
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default PopUpAd
