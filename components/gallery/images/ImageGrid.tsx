'use client'

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
}) => {
  return (
    <>
      {/* <div
        className={`ext ${
          selectedImage === title &&
          'w-[100vw] h-[100vh] bg-black/80 absolute inset-0 flex justify-center items-center z-50'
        }`}
      >
        <div
          key={title}
          className={`relative img-box rounded-xl cursor-pointer duration-300 ${
            selectedImage === title
              ? 'scale-[2] md:scale-150 z-50 md:w-1/2 md:h-1/2 flex justify-center items-center overflow-hidden md:p-10'
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
      </div> */}

      <div
        key={title}
        className={`relative img-box rounded-xl cursor-pointer duration-300 h-64 group`}
        onClick={() => {
          !selectedImage.src && setSelectedImage({ src: src, imgTitle: title })
        }}
      >
        <Image
          src={src}
          alt={title}
          className={`rounded-md object-cover overflow-hidden group-hover:opacity-75`}
          // sizes='128px'
          placeholder='blur'
          fill
        />
      </div>
    </>
  )
}

export default ImageGrid
