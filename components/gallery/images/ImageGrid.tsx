'use client'

import { X } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const ImageGrid = ({
  title,
  src,
  selectedImage,
  setSelectedImage,
}: {
  title: string
  src: StaticImageData
  selectedImage: string | null
  setSelectedImage: Dispatch<SetStateAction<string | null>>
}) => {
  return (
    <>
      <div
        className={`ext ${
          selectedImage === title &&
          'w-[100vw] h-[100vh] bg-black/80 absolute inset-0 flex justify-center items-center z-50'
        }`}
      >
        <div
          key={title}
          className={`relative img-box rounded-xl cursor-pointer duration-300 ${
            selectedImage === title
              ? 'scale-150 z-50 w-1/2 h-1/2 flex justify-center items-center overflow-hidden p-10'
              : 'h-64 group'
          }`}
          onClick={() => {
            !selectedImage && setSelectedImage(title)
            console.log('🚀 ~ selectedImage in title:', selectedImage)
          }}
        >
          {selectedImage === title && (
            <div
              className='absolute right-0 top-0 text-white z-50 scale-75 hover:scale-100 duration-150'
              onClick={() => {
                setSelectedImage(null)
                console.log('🚀 ~ selectedImage:', selectedImage)
              }}
            >
              <X />
            </div>
          )}

          <Image
            src={src}
            alt={title}
            className={`rounded-md ${
              selectedImage ? 'object-contain' : 'object-cover'
            } overflow-hidden group-hover:opacity-75`}
            // sizes='128px'
            placeholder='blur'
            fill
          />
        </div>
      </div>
    </>
  )
}

export default ImageGrid
