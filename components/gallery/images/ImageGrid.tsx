'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

const ImageGrid = ({ title, src }: { title: string; src: StaticImageData }) => {
  const [selectedImage, setSelectedImage] = useState('')

  const changeSelectedImage = () => {
    setSelectedImage(title)
  }

  return (
    <div
      key={title}
      className={`img-box bg-secondary rounded-md cursor-pointer hover:opacity-70 duration-100`}
      onClick={changeSelectedImage}
    >
      <AspectRatio ratio={16 / 9} className='img-box'>
        <Image
          src={src}
          alt={title}
          className='rounded-md object-contain'
          fill
        />
      </AspectRatio>
    </div>
  )
}

export default ImageGrid
