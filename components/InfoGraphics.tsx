import Image, { StaticImageData } from 'next/image'
import React from 'react'

const InfoGraphics = ({
  inverse,
  title,
  desc,
  imgSrc,
}: {
  inverse?: boolean
  title: string
  desc: string
  imgSrc: StaticImageData
}) => {
  return (
    <>
      <div className='w-full h-fit md:h-[30rem] flex flex-col space-y-2 md:space-y-0 md:flex-row bg-secondary p-5 md:p-0 rounded-xl'>
        <div
          className={`md:relative w-full md:w-1/2 md:h-full bg-secondary rounded-lg ${
            inverse && 'md:order-2'
          }`}
        >
          <Image
            src={imgSrc}
            alt=''
            className='hidden md:block'
            fill
            placeholder='blur'
          />
          <Image
            src={imgSrc}
            alt=''
            className='md:hidden'
            width={400}
            height={150}
            placeholder='blur'
          />
        </div>

        <div className='w-full md:w-1/2 md:h-full md:px-5 md:py-10 flex flex-col justify-center'>
          <h3 className='text-3xl font-medium'>{title}</h3>

          <p className='text-lg mt-3'>{desc}</p>
        </div>
      </div>
    </>
  )
}

export default InfoGraphics
