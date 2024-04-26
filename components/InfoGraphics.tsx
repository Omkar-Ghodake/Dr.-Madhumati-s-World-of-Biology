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
      <div className='w-full flex h-[30rem]'>
        <div className={`relative w-1/2 h-full ${inverse && 'order-2'}`}>
          <Image src={imgSrc} alt='' fill />
        </div>

        <div className='w-1/2 h-full px-5 py-10 flex flex-col justify-center'>
          <h3 className='text-3xl font-medium'>{title}</h3>

          <p className='text-lg mt-3'>{desc}</p>
        </div>
      </div>
    </>
  )
}

export default InfoGraphics
